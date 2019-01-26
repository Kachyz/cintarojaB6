//Que es un callback
//Una funcion que es enviada a otra como parametro

function imprimirNombre(name){
  console.log(`Hola me llamo ${name}`);
}

let imprimirApellido = (lastName) => {
  console.log(`Mi apellido es ${lastName}`);
  console.log(object);
}

//Valor es un String, callback es una funcion
function recibeCallback( valor, callback ){
  //ejecutar el callback recibido
  //mandar un correo
  //cambiar la pagina que estas mostrando
  //meter en un reporte de errores la falla
  callback(valor)
}

// Aqui empieza mi ejecucion
recibeCallback('Marco', imprimirNombre)
recibeCallback('Marco', imprimirApellido)


Error : 500 : usuario no encontrado
Warn  : 300 : 3er intento de login - email