//Método para listar los archivos (Pareceran enlaces)
function listar() {
  let url = "http://localhost:3000/listar"

  //Consulta fetch con get
  fetch(url)
  .then(response => response.json())
  .then(data => {
    //El servidor me devuelve el siguiente objeto
    //en fomato json {"lista": [...]}
    let lista = data.lista
    let html = `<ul>`
    //Bucle for -> quiero usar el nombre y el indice al mismo tiempo
    for(let i=0;i<lista.length; i++) {
      html += `<li onclick="verContenido() id="${i+1}">${lista[i]}</li>`
    }
    html += `</ul>`
    //Insertando lista con los archivos disponibles
    document.getElementById("main").innerHTML = html

  })
}