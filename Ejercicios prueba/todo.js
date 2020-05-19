function hola() {
  let texto = document.getElementById("nuevoElemento").value
  let lista = document.getElementById ("lista")

  let nuevaEtiqueta = document.createElement("li")
  let textoInterno = document.createTextNode(texto)
  nuevaEtiqueta.appendChild(textoInterno)
  lista.appendChild(nuevaEtiqueta)
}
