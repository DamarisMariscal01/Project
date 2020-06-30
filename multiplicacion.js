let calificacionM = 0;

function comprobar() {
  let numero1 = document.getElementById('numero1').innerHTML;
  let numero2 = document.getElementById('numero2').innerHTML;
  let numUsuario = document.getElementById('numUsuario').value;

  let resultado = numero1*numero2;

  if (resultado == numUsuario) {
    alert ("CORRECTO :D")
    document.getElementById('numUsuario').value = "";
    actualizar();
  }
  else {
    alert ("SIGUE INTENTANDO")
  }
}

function actualizar() {
  let numRandom1 = Math.floor(Math.random()*10)+1;
  console.log(numRandom1);
  let numRandom2 = Math.floor(Math.random()*10)+1;
  console.log(numRandom2);

  document.getElementById("numero1").innerHTML = numRandom1
  document.getElementById("numero2").innerHTML = numRandom2
}



function comprobarSuma(){
  let numero1 = document.getElementById('numero1S').innerHTML;
  let numero2 = document.getElementById('numero2S').innerHTML;
  let numUsuario = document.getElementById('numUsuarioS').value;

  let resultado = parseInt(numero1)+ parseInt(numero2);
  console.log(resultado);
  if (resultado == numUsuario) {
    alert ("CORRECTO :D")
    document.getElementById('numUsuarioS').value = "";
    actualizarSuma();
  }
  else {
    alert ("SIGUE INTENTANDO")
  }
}

function actualizarSuma() {
  let numRandom1 = Math.floor(Math.random()*10)+1;
  console.log(numRandom1);
  let numRandom2 = Math.floor(Math.random()*10)+1;
  console.log(numRandom2);

  document.getElementById("numero1S").innerHTML = numRandom1
  document.getElementById("numero2S").innerHTML = numRandom2
}


function comprobarResta(){
  let numero1 = document.getElementById('numero1R').innerHTML;
  let numero2 = document.getElementById('numero2R').innerHTML;
  let numUsuario = document.getElementById('numUsuarioR').value;

  let resultado = parseInt(numero1) - parseInt(numero2);
  console.log(resultado);
  if (resultado == numUsuario) {
    alert ("CORRECTO :D")
    document.getElementById('numUsuarioR').value = "";
    actualizarResta();
  }
  else {
    alert ("SIGUE INTENTANDO")
  }
}

function actualizarResta() {
  let numRandom1 = Math.floor(Math.random()*10)+1;
  console.log(numRandom1);
  let numRandom2 = Math.floor(Math.random()*10)+1;
  console.log(numRandom2);

  document.getElementById("numero1R").innerHTML = numRandom1
  document.getElementById("numero2R").innerHTML = numRandom2
}

function mostrarM(){
  document.getElementById("multiplicaciones").style.display="flex";
  document.getElementById("sumas").style.display="none";
  document.getElementById("restas").style.display="none";
  document.getElementById("testM").style.display="none";

}


function mostrarS(){
  document.getElementById("sumas").style.display="flex";
  document.getElementById("multiplicaciones").style.display="none";
  document.getElementById("restas").style.display="none";
  document.getElementById("testM").style.display="none";

}

function mostrarR(){
  document.getElementById("restas").style.display="flex";
  document.getElementById("multiplicaciones").style.display="none";
  document.getElementById("sumas").style.display="none";
  document.getElementById("testM").style.display="none";

}

function calificarM(){
  let test1m = document.getElementById('test1m').innerHTML;
  let test2m = document.getElementById('test2m').innerHTML;
  let nPregunta = document.getElementById('numPreguntaM').innerHTML;
  let usuarioTestM = document.getElementById('usuarioTestM').value;

  if (nPregunta == 5) {
    document.getElementById("siguienteM").style.display="none";
    document.getElementById("mostrarCM").style.display="block";
    document.getElementById("espacioM").style.display="none";

  }
  if (nPregunta < 5) {
    document.getElementById('numPreguntaM').innerHTML = parseInt(nPregunta) + 1;
  }


  let resultado = parseInt(test1m) * parseInt(test2m);
  if (resultado == usuarioTestM) {
    calificacionM += 1
    document.getElementById('usuarioTestM').value = "";
    actualizarTestM();
  }
  else {
    document.getElementById('usuarioTestM').value = "";
    actualizarTestM();
  }
  console.log(calificacionM);
}

function actualizarTestM(){
  let numRandom1 = Math.floor(Math.random()*10)+1;
  let numRandom2 = Math.floor(Math.random()*10)+1;

  document.getElementById("test1m").innerHTML = numRandom1
  document.getElementById("test2m").innerHTML = numRandom2
}

function mostrarCaliM(){
  document.getElementById("contenedorCM").style.display="block";
  document.getElementById("caliM").innerHTML = calificacionM
  document.getElementById("mostrarCM").style.display="none";
}

function examen(){
  document.getElementById("multiplicaciones").style.display="none";
    document.getElementById("testM").style.display="block";

}
