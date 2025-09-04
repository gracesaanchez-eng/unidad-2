/*POO (programación orientada a objectes)
Este es un paradigma de programación que se usa actualmente

Hay conceptos asociados a la POO como clases, objetos, stc

El concepto que vamos a aprender hoym si bien tiene el mismo nombre que este concepto base de la programación que se aplica en muchos lenguages, no es el mismo. JavaScript lo maneja diferente

OBJETO JAVASCRIPT-> Son la abstracción a la programación, de cualquier concept real. 
Es una estrctura de datos que se almacenan con el formato clave (atributo o propiedad) valor

SINTAXIS
let nombreObjeto = {
    atributo1: valor1,
    atributo2: valor2,
    atributo3: valor3
};
los atributos siguen la regla de los nomnres de variables
Los valores son datos, por ende si son strings, deben ir en comillas
Los valores pueden ser de cualquier tipo o estructura de datos, incluyendo otros objetos.

RETO1: Crea un objeto de persona*/
let person = {
    name: "Grace",
    age: 19,
    birthdate: "11-01-2006",
    zodiacSign: "Capricornio",
    country: "Perú",
    cellphone: "936559470",
    //El tipo de dato correcto para un numero de celular es string
    hobbies: ["programar", "cantar", "aprender"]
}
console.log(person);

/*Accediendo al valor de los atributos de mi objeto, hay dos formas:
    1. Notación de punto: nombreObjeto.nombreAtributo
    2. Notación de corchetes: nombreObjeto["nombreAtributo"]

//Acceder con notación de punto
    console.log(person.name);
//Acceder con notación de corchetes
    console.log(person["age"]);

RETO2: Muestra todos los valores de los atributos de un objeto
*/
console.log(person.name);
console.log(person.age);
console.log(person["birthdate"]);
console.log(person["zodiacSign"]);
console.log(person.country);
console.log(person.cellphone);
console.log(person["hobbies"]);
console.log(person.hobbies[0])
console.log(person.hobbies[1])

//RETO3: Actualiza una propiedad y agrega una nueva
//Actualizar el valor de un objeto
console.log("Actualizando el valor del atributo cellphone")
person.cellphone = "123456789";
console.log(person.cellphone);

//Agregar un nuevo atributo
console.log("Agregando un nuevo atributo nickname")
person.nickname = "Geshe";
console.log(person);

//Hoisting -> Antes de ejecutar todo el código de arriba hacia abajo,. JavaScript analiza todas las declaraciones de variables y funciones.

/*JSON: JavaScript Object Notation
Son un tipo de archivo que solo almacena datos con la sintaxis de objetos de JavaScript

Estos archivos tienen la extensión .json
Solo almacenan datos, nada de código de programación
Al contrario que en javascript, en los archivos JSON los atributos o propiedades deben ser esscritos entre comillas.
*/

let heroes = {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2016,
    secretBase: "Super tower",
    active: true,
    members: [
      {
        name: "Molecule Man",
        age: 29,
        secretIdentity: "Dan Jukes",
        powers: [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        name: "Madame Uppercut",
        age: 39,
        secretIdentity: "Jane Wilson",
        powers: [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        name: "Eternal Flame",
        age: 1000000,
        secretIdentity: "Unknown",
        powers: [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
console.log(heroes);
console.log(heroes.formed);

//Mostrar el atributo
console.log(heroes.members);
//Indexar el primer elemento del array members
console.log("Primer elemento de heroes.members");
console.log(heroes.members[0]);
//Acceder a los atributos del objeto dentro de members
//Heroes.members[0] es un objeto, por eso puede acceder por punto 
console.log(heroes.members[0].name);
//heroes.members[0].powers es un array, puede indexar
console.log(heroes.members[0].powers[1]);

/*RETO4: Accediendo al objeto mostrar los siguientes valores:
  - Damage resistance
  - Eternal Flame
  - Inferno
*/

console.log(heroes.members[1].powers[1]);

console.log(heroes.members[2].name)

console.log(heroes.members[2].powers[2])
