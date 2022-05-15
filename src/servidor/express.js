const fs = require('fs')
const path = require('path')
const express = require('express')
var cors = require('cors');
const bp = require('body-parser')
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
const app = express()

app.use(cors());
app.use(express.static('/'))
app.use(bp.json())
app.use(bp.urlencoded({
    extended: true
}))
app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")
})
//Entrega el contenido del index.html al cliente
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})
app.get('/js/script.js', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'js/script.js'))
})
//crea el archivo markdown que le llega y lo guarda en la carpeta archivos
app.post('/', (request, response) => {
    console.log(request.body)
    let markDownText = request.body.text
		let fileName = request.body.fileName
    console.log(markDownText)
		let ruta = "archivos/" + fileName + ".txt"
    console.log(markDownText)
		try {
			fs.writeFileSync(ruta, markDownText)
		} catch (err) {
			console.error(err)
		}
		//prueba
		try {
			fs.writeFileSync("archivos/titulos.txt", fileName)
		} catch (err) {
			console.error(err)
		}
    let htmlText = "Funciono!"
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({
        text: htmlText
    }))
})





