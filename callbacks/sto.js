console.log("INICIO");

setTimeout( () => {
    console.log('Estamos dentro del primer SetTimeOut')
  }, 3000)

console.log('MEDIO');

setTimeout( () => {
    console.log('Estamos dentro del segundo SetTimeOut')
  }, 10)

for(let i = 0; i<1000000000; i++){ }



console.log("FINAL");

/*
inicio
Estamos dentro del STO
final


*/