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
    let html = `
								<h2>Lista de Archivos</h2>
									<ul>`
    //Bucle for -> quiero usar el nombre y el indice al mismo tiempo
    for(let i=0;i<lista.length; i++) {
      html += `<li onclick="verContenido('${i+1}')" id="${i+1}">${lista[i]}</li>`
    }
    html += `</ul>`
    //Insertando lista con los archivos disponibles
    document.getElementById("main").innerHTML = html

  })
};


//Método verContenido() -> Hara una consulta a ver contenido de un archivo
//El response estará en formato json y es contenido ya tendrá las etiquetas html
function verContenido(id) {
  const url = "http://localhost:3000/ver"
  //Extraemos el nombre del archivo
  let nombre = document.getElementById(id).textContent

  //Creamos el objeto donde guardaremos el nombre
  let objectQuery = {
    name: nombre,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //Convertivos a json porque en headers le indicamos que le enviariamos un json
    body: JSON.stringify(objectQuery),
  })
    .then(response => response.json())
    .then(data => {
      let html = `<h3>${nombre}</h3>`;
      html += data.text;

      document.getElementById("main").innerHTML = html
    })
};


//Método crear() -> Hara la consulta para crear documento
//mandando un json con los datos
function crear() {
  const url = "http://localhost:3000/crear"
  //Se extraen los valores de nombre (Texto) y contenido (Texto en markdown)
  let nombre = document.getElementById("name").value
  let texto = document.getElementById("text").value

  //Creamos el objeto donde guardaremos la info
  let archivo = {
    file: nombre,
    text: texto
  }
  http = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //Convertivos a json porque en headers le indicamos que le enviariamos un json
    body: JSON.stringify(archivo),
  });
  http.then(
    response => response.json()
  ).then(
    data => {
      document.querySelector("#main").innerHTML = data.text
    }
  )
};
