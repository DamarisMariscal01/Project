function dobleNum(numero) {
  let doble = numero * 2
  return doble
}
console.log("El doble del numero 8 es: " , dobleNum(8));



function producto(numero1, numero2) {
  let resultado = numero1 * numero2
  return resultado
}
console.log("El producto es de tus numeros es: " , producto(12, 6));


function cubo(numero) {
  let respuesta = numero * numero * numero
  return respuesta
}
console.log("El cubo de tu numero es: " , cubo(18));

let aleatorio = Math.floor(Math.random() * 10);
console.log(aleatorio, cubo(aleatorio))
