// 1- Hacer una funcion que convierta grados C a F
// 2- Hacer una funcion que muestre la tabla de multiplicar de X numero

function multi(n){
  for (let x = 1; x <= 10; x++) {
    // console.log(`${x} * ${n} = ${x * n}`)
  }
}
multi(6)

// 3- Funcion que pida N cantidad de parametros, devuelva cuantos parametros recibio



// 4- Leer un arreglo de enteros
//   * Sacar el promedio   - Suma de todos los valores, dividir entre la cantidad de valores
//   * Sacar la mediana    - La mitad entre el numero mas grande y el mas chico
let arrInt = [1,2,3,4,5,6,10, 20, 50, 300]
//promedio
let promedio = 0;
for(let i=0; i<arrInt.length; i++){
  // promedio += arrInt[i]
  promedio = promedio + arrInt[i]
}
promedio = promedio / arrInt.length
console.log('promedio =',promedio)

let mediana = (arrInt[0] + arrInt[arrInt.length-1])/2
console.log('mediana', mediana)




// 5- Guardar los primeros 20 numeros pares e imprimirlos de manera inversa
let arrPares = []

for(let n = 0; arrPares.length<20; n++){
  if( n % 2 === 0){
    //Es par
    console.log('Encontramos un par', n);
    arrPares.push(n)
  }
}

console.log(arrPares.reverse())







// 6- Obtener los primeros 10 numeros primos
// 7- Una funcion que sume todos los numeros entre 1 y N
//   * N es un valor que se recibe como parametro
