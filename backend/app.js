// Importamos el modulo EXPRESS para poder utilizar
// sus propiedades en este archivo
const express = require('express')  // Aqui vive el modulo completo
let app = express()                 // app ES el servidor

// app.<metodo>(<ruta>, <CB>)
app.get('/', function(request, response){
  console.log('Hicieron una peticion GET a la raiz')
  response.send('Hola desde el servidor')
})

app.get('/persona', (req, res) => {
  console.log('Estamos en la ruta PERSONA');
  res.send('persona')
})

// Params
app.get('/persona/:idpersona', (req, res) => {
  console.log('Estamos en la ruta PERSONA con parametro');
  let idpersona = req.params.idpersona
  res.send(`<h1>Hola ${idpersona}</h1>`)
})

// Query
app.get('/buscar', (req, res) => {
  console.log('Estamos en la ruta BUSCAR')
  let nombre = req.query.nombre
  let apellido = req.query.apellido
  if(apellido){
    res.send(`hola ${req.query.nombre} ${req.query.apellido}`)
  } else {
    res.send(`hola ${nombre} Snow`)
  }
})


// PUERTO donde escuchamos las peticiones
app.listen(5000, () => {
  console.log('Estamos corriendo un server en el puerto 5000')
})
