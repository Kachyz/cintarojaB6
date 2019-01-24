// 1- Hacer una clase PERSONA que reciba 5 atributos
//   * Decir cual es su IMC
//   * Decir cual es su nombre
//   * Si es o no mayor de edad
//   * Cumpliranios

class Persona {
  constructor(nombre, edad, peso, altura){
    this.nombre = nombre 
      // this.nombre pertenece al objeto
      // nombre es un parametro que recibimos
    this.edad = edad
    this.altura = altura
    this.peso = peso
  }

  calcularIMC(){
    return this.peso / (this.altura ** 2)
  }

  esMayor(){
    return this.edad >= 21 ? 'SI' : 'NO'
  }

  cumplirAnios(){
    this.edad += 1
    console.log('Ahora tengo ' + this.edad + ' anios');
  }
}

let juan = new Persona('juan', 20, 70, 1.65)
console.log(juan.calcularIMC());
console.log(`Juan es mayor de edad? ${juan.esMayor()}`);
juan.cumplirAnios()
console.log(`Juan es mayor de edad? ${juan.esMayor()}`);



// 2- Crear una clase Vehiculo que tenga los atributos
//     Marca, color, anio, numero de llantas, numero de pasajeros
//   * Un metodo que reciba N cantidad de pasajeros y te diga si puede 
//     o no subirlos a todos

// 3- Crear clase animal con los atributos que gusten
//   * Decir si puede volar
//   * Decir si tiene pelo o plumas
//   * Nombre que se le da a su onomatopeya