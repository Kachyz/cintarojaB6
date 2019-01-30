// FILTER
// 1.- A partir del siguiente arreglo de animalitos: 
//     const animalitos = [
//     { nombre: "carlitos"  , especie: "conejo" },    // 0
//     { nombre: "esteban"   , especie: "perro" },     // 1
//     { nombre: "fabiruchis", especie: "tortuga" },   // 2
//     { nombre: "anita"     , especie: "gato" },      // 3
//     { nombre: "miranda"   , especie: "conejo" },    // 4
//     { nombre: "lucas"     , especie: "conejo" },    // 5
//     { nombre: "Horacia"   , especie: "tortuga" }    // 6
//     ];
// A) Genera un nuevo arreglo en el que solo se encuentren los conejos del arreglo original.  
// B) Genera un nuevo arreglo en el que solo listes nombres que contengan la letra 'S'
// C) Cambia la especie de los perros por 'canino' y de los gatos por 'felino'

// 2.- A partir del siguiente arreglo de mascotas:
    const mascotas = [
        { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
        { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
        { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
        { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
        { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
    ];

    let comidas = mascotas.map(mascota => mascota.comidasFavoritas)
    console.log(comidas.join(',').split(','))

// A) Genera un nuevo arreglo que contenga los nombres de todas las mascotas. 
// B) Genera un nuevo arreglo que contenga TODAS las comidas favoritas
// C) Agrega a todos los perros tortillas dentro de sus comidas favoritas

