const fs = require('fs')
const path = require('path')
const express = require('express')
const bp = require('body-parser')
const MarkdownIt = require('markdown-it'),
  md = new MarkdownIt();
const app = express()

app.use(express.static('cliente'))
app.use(bp.json())
app.use(bp.urlencoded({
  extended: true
}))

app.use(express.static('cliente'))

app.listen(3000, () => {
  console.log("Escuchando en: http://localhost:3000")

})

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'index.html'));
})

app.post('/crear', (request, response) => {
  console.log(request.body);
  let markDownText = request.body.text
  let tit = request.body.name
  let ruta = "archivos/"+tit+".txt"
  console.log(markDownText)
  try {
    fs.writeFileSync(ruta, markDownText);
  } catch (err) {
    console.error(err);
  }
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({
    text: "<h1>Guardado</h1>" 
  }))
})

app.get('/listar', (request, response) => {
  const ruta = 'archivos';
  let list = fs.readdirSync(ruta);
  console.log(list);
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({
    lista: list 
  }))


})
