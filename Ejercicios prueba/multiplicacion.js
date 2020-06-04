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
