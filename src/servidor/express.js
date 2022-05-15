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
    response.sendFile(path.resolve(__dirname, 'index.html'))
})
app.get('/js/script.js', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'js/script.js'))
})
//traduce el texto markdown que le llega y lo envia al cliente
app.post('/', (request, response) => {
    console.log(request.body)
    let markDownText = request.body.text
    console.log(markDownText)
    let htmlText = md.render(markDownText)
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({
        text: htmlText
    }))
})





