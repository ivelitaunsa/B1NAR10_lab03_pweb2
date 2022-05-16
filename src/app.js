const fs = require('fs')
const path = require('path')
const express = require('express')
var cors = require('cors');
const bp = require('body-parser')
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

app.post('/crear', (request,response) => {
  console.log(request.body)
})
app.get('/listar', (request,response) => {
  console.log(request.body)
})
app.post('/ver', (request,response) => {
  console.log(request.body)
})
