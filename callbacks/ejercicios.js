// 1- Funcion calculadora que reciba un CB y 2 valores numericos
//   * cada funcion que puede recibir es una operacion + - / *
//   * ejecutar el CB con los valores recibidos

function calculadora(num1, num2, operacion){
  console.log('Bienvenidos a su calculadora');
  return operacion(num1, num2)
}
// let suma = (n1, n2) => n1+n2
function suma(n1, n2){
  return n1 + n2
}
let resta = (n1, n2) => n1-n2

// console.log(calculadora(2, 7, resta))
// console.log(calculadora(3, 7, resta))
// console.log(calculadora(2, 7, suma))
// console.log(calculadora(2, 70, suma))


// 2- Funcion Carcel que reciba el nombre de un criminal y su edad
//   * Revisar si el criminal es mayor de edad
//   * SI es mayor de edad (imprimir)
//     - dar una condena de 5 anios
//     - Asignar un numero aleatorio de recluso
//   * SI NO es mayor de edad
//     - Mandar al tutelar
//     - Cobrar una multa de 50 pesos

// 3- Hacer una funcion que reciba una PALABRA y un CB
//   - El callback debe poder imprimir la PALABRA de maneras distintas
//       (mayuscula, minusculas, una y una, Solo la primera mayuscula, al reves)


function cambiarPalabra(word, metodo){
  console.log(metodo(word))
}

let mayusculas = (palabra) => palabra.toUpperCase()
let minusculas = (palabra) => palabra.toLowerCase()
let primera = (palabra) => {
  let p = palabra.toLowerCase()
  return p.charAt(0).toUpperCase() + p.slice(1)
}

cambiarPalabra('EduArdo', mayusculas)
cambiarPalabra('EduArdo', minusculas)
cambiarPalabra('EduArdo', primera)
