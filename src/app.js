const fs = require('fs')
const path = require('path')
const express = require('express')
var cors = require('cors');
const bp = require('body-parser')
const MarkdownIt = require('markdown-it'),
		md = new MarkdownIt();
const app = express()
app.use(cors());
app.use(express.static('cliente'))
app.use(bp.json())
app.use(bp.urlencoded({
  extended: true
}))

app.listen(3000, () => {
  console.log("Escuchando en: http://localhost:3000")
})

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, '/cliente/index.html'));
});
//crear los archivos, guardandolos en la carpeta archivos/
app.post('/crear', (request,response) => {
    console.log(request.body)
    let markDownText = request.body.text
		let fileName = request.body.file
		let ruta = "archivos/" + fileName + ".txt"
    console.log(markDownText)
		try {
			fs.writeFileSync(ruta, markDownText)
		} catch (err) {
			console.error(err)
		}
    let htmlText = "Funciono!"
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({
        text: htmlText
    }))

  console.log(request.body)
})
//se encarga de enviar la lista de archivos
app.get('/listar', (request,response) => {
	let names
	fs.readdir(path.resolve(__dirname, 'archivos'), (err, files) => {
  if (err)
		names = 'Ocurrio un error'
  else {
		names = files
  }
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({
    list: names 
  }))
})
})
//nos permite visualizar el contenido de los archivos
app.post('/ver', (request,response) => {
	let title = request.body.name
 	fs.readFile(path.resolve(__dirname, 'archivos/' + title), 'utf8',
        (err, data) => {
            if (err) {
                console.error(err)
                response.status(500).json({
                    error: 'message'
                })
                return
            }
						let htmlText = md.render(data)
            response.json({
                text: htmlText
            })
        })
    //
})
