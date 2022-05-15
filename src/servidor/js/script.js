//Este script está destinado únicamente la interfaz de informacion y formularios (No atiende request)

window.addEventListener("load", showWelcome);

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
							<form action="POST" id="markupForm">
              	Nombre del Archivo: <input type="text" id="textName" name="textName"></input> <br>
              	Contenido: <textarea id="markupText" cols="50" rows="30"></textarea>
								<input type="submit" value="Enviar">
              </form>`

  document.getElementById("main").innerHTML = html;
  //usar enviarData
}
function listar() {
  let html = `
              <h2>Archivos creados:<h2>`
  document.getElementById("main").innerHTML = html;
}

//extraer cont de lo enviado
function enviarData(){ 
	const text = document.querySelector('#markupText');
	const name = document.querySelector('#textName');
  document.querySelector('#markupForm').onsubmit = () => {
		console.log(text.value)
		console.log(name.value)

		return false;
	}
}
