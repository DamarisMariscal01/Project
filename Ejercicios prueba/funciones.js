console.log("Hola")

let coloreado = false
let subrayado = false

//Nos pide el nombre del usuario
function pedirNombre() {
  //Guardamos el nombre de la persona
  let nombre = prompt('Cual es tu nombre?');
  //Muestra mensaje en el H1  con el ID saludo
  document.getElementById('saludo').innerHTML = 'Hola ' + nombre + ' !'
}

function cambiarColor() {
  let texto = document.getElementById('saludo')

  if (coloreado == false) {
    texto.classList.add('letrasRosas')
    coloreado = true
  } else {
    texto.classList.remove('letrasRosas')
    coloreado = false
  }
}

function subrayarTexto() {
  let texto = document.getElementById('saludo')

  if (subrayado == false) {
    texto.classList.add('subrayado')
    subrayado = true
  } else {
    texto.classList.remove('subrayado')
    subrayado = false
  }
}
