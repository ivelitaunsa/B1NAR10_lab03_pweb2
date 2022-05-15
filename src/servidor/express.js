const fs = require('fs')
const path = require('path')
const express = require('express')
//var cors = require('cors');
const bp = require('body-parser')
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
const app = express()

//app.use(cors());
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
    response.sendFile(path.resolve(__dirname, 'index2.html'))
})


/*app.get('/js/script.js', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'js/script.js'))
})*/


//traduce el texto markdown que le llega y lo envia al cliente
app.post('/', (request, response) => {
    console.log(request.body);

    let markDownText = request.body.text;
    let tit = request.body.fileName;
    console.log(markDownText);
    let ruta = "archivos/"+tit+".txt";
   
		try {
			fs.writeFileSync(ruta, markDownText)
		} catch (err) {
			console.error(err)
		}
	//prueba 1 elemento
		try {
			fs.writeFileSync("archivos/titulos.txt", title)
		} catch (err) {
			console.error(err)
		}
		
		response.setHeader('Content-Type', 'application/json')
    	response.end(JSON.stringify({
      	  text: "Funciono" 
    	}))
})
//ver
app.post('/view', (request, response) => {
    var fileName = request.body.text;
    console.log(fileName);
      });
  



