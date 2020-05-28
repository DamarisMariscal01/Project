function crecer() {
  let imagen = document.getElementById("imagen-snoopy");
  let botonCrecer = document.getElementById("boton-crecer");
  let botonReducir = document.getElementById("boton-reducir");

  imagen.width += 30;

  //BOTÓN CRECER
  if (imagen.width > 800) {
    botonCrecer.disabled = true;
  }

  //BOTÓN REDUCIR
  if (imagen.width > 400) {
    botonReducir.disabled = false;
  }
}

function reducir () {
  let imagen = document.getElementById("imagen-snoopy");
  let botonCrecer = document.getElementById("boton-crecer");
  let botonReducir = document.getElementById("boton-reducir");

  imagen.width -= 30;

  //BOTÓN CRECER
  if (imagen.width <= 400) {
    botonCrecer.disabled = true;
  }

  //BOTÓN REDUCIR
  if (imagen.width < 800) {
    botonReducir.disabled = false;
  }
}

function cambiarImagen() {
  let imagen = document.getElementById("imagen-snoopy")
  imagen.src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Peanuts-Group-2.jpg"
}

console.log ("hi")
