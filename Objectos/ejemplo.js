// // Tipos de objetos
// // - Literales
// // - Clases

// // Literales
// let PerroLiteral = {
//   raza: 'chihuahua',
//   edad: 5,
//   color: 'cafe',
//   tamanio: 'pequeno',
//   atacar: function ataque(){console.log('el perro esta atacando')}
// }

// // console.log(Perro);
// // console.log('RAZA =', Perro['raza']);
// // console.log('COLOR =', Perro.color);
// // Perro.atacar()

// // Clases
// class Perro {
//   // constructor
//   constructor(raza, edad, color, nombre){
//     this.edad = edad,
//     this.raza = raza,
//     this.color = color
//     this.nombre = nombre
//   }

//   atacar(persona){
//     console.log(`Me llamo ${this.nombre} y esto atacando a ${persona}`)
//   }

//   comer(comida){
//     console.log('comiendo', comida)
//   }
// }


// let ayudanteDeSanta = new Perro('chihuahua', 10, 'cafe', 'ayudante')
// let firulais = new Perro('poodle', 2, 'blanco', 'firulais')

// ayudanteDeSanta.atacar('Charly')
// firulais.atacar('Charly')

// console.log(firulais.color);
// console.log(ayudanteDeSanta.color);

class Animal {
  // constructor
  constructor(raza, edad, color, nombre){
    this.edad = edad,
    this.raza = raza,
    this.color = color
    this.nombre = nombre
  }

  comer(comida){
    console.log(`Soy un ${this.raza} y estoy comiendo comiendo ${comida}`)
  }
}

class Perro extends Animal{
  constructor(raza, edad, color, nombre, duenio){
    super(raza, edad, color, nombre) 
    //Manda todos los atributos que queremos a la clase padre
    this.duenio = duenio 
  }

  atacar(persona){
    console.log(`Me llamo ${this.nombre} y esto atacando a ${persona}`)
  }
}

let miAvestruz = new Animal('avestruz', 5, 'negro', 'pepe')
let miPerro = new Perro('beagle', 4, 'cafe', 'perrito', 'Kachyz')

miAvestruz.comer('gusanos')
miPerro.comer('croquetas')

miPerro.atacar('Marco')
miAvestruz.atacar('Marco')
