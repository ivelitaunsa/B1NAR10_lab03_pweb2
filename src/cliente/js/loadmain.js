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
              <p>Ingrese Nombre</p>
              <input type="text" id="name"></input> <br>
              <p>Ingrese Texto</p>
              <textarea id="text" cols="50" rows="30"></textarea>
              <p class="button">Enviar</p>`
  document.getElementById("main").innerHTML = html;
}