function comprobar() {
  let numero1 = document.getElementById('numero1').innerHTML;
  let numero2 = document.getElementById('numero2').innerHTML;
  let numUsuario = document.getElementById('numUsuario').value;

  let resultado = numero1*numero2;

  if (resultado == numUsuario) {
    alert ("CORRECTO :D")
  }
  else {
    alert ("SIGUE INTENTANDO")
  }
}
