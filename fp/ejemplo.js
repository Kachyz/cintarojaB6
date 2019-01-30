// MAP

function duplicaNumero(numero){
  // console.log('Current Value = ', numero);
  return numero * 2
}

let arreglo = [2,4,6,8]
// arregloDoble [4, 8, 12, 16]
let arregloDoble = arreglo.map(duplicaNumero)

// console.log(duplicaNumero(14));
console.log(arreglo, arregloDoble)
