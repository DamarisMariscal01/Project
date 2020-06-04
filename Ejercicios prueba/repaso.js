let numero1 = 0
let numero2 = 0

function suma() {
  let total = parseInt(document.getElementById("numero1").value) + parseInt(document.getElementById("numero2").value)
  document.getElementById("total").innerHTML = total
}

function resta() {
  let total = parseInt(document.getElementById("numero1").value) - parseInt(document.getElementById("numero2").value)
  document.getElementById("total").innerHTML = total
}

function multiplicacion() {
  let total = parseInt(document.getElementById("numero1").value) * parseInt(document.getElementById("numero2").value)
  document.getElementById("total").innerHTML = total
}

function division() {
  let total = parseInt(document.getElementById("numero1").value) / parseInt(document.getElementById("numero2").value)
  document.getElementById("total").innerHTML = total
