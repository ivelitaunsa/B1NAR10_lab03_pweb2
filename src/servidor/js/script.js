//Este script está destinado únicamente la interfaz de informacion y formularios (No atiende request)

window.addEventListener("load", showNew);

//Este método será reutilizado en el index.html
function showWelcome() {
  let html = `
              <h2>Bienvenido</h2>
              <p>Este es un navegador de archivos markdown con el cual puedes listar, ver y crear archivos markdown.
               Estos archivos serán traducidos y mostrados en lenguaje html.</p>
              <p>En este trabajo usamos las siguientes tecnologías: </p>
              <ul>
                <li>Html (Frontend)</li>
                <li>Css (Frontend)</li>
                <li>Javascript (Frontend y Backend)</li>
                <li>Nodejs (Backend)</li>
                <li>Módulos express y cors (Backend)</li>
                <li>La comunicación entre cliente y sevidor se dará en formato JSON</li>
              </ul>`;
  document.getElementById("main").innerHTML = html;
}
function showNew() {
  let html = `
              <h2>Creando Archivo ...</h2>
							<form method="POST" id="markupForm">
              	Nombre del Archivo: <input type="text" id="fileName" name="fileName"><br>
              	Contenido: <textarea id="markupText" cols="50" rows="30"></textarea>
								<input type="submit" value="Enviar">
              </form>`

  document.getElementById("main").innerHTML = html;
}
function listar() {
  let html = `
              <h2>Archivos creados:<h2>`
}
function traducir(markupText, fileName) {
	const url = 'http://localhost:3000/'
	const data = {
		text: markupText
		fileName: fileName		
	}
	console.log(data)	
	const request = {
		method: 'POST', // Podría ser GET
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}
	http = fetch(url, request)
	http.then(
		response => response.json()
	).then(
		data => {
			document.querySelector("#htmlCode").innerHTML = data.text
			}
		)
}
