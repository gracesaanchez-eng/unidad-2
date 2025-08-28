console.log("ARCHIVO CREADO")

//FUNCIÓN -> es un bloque de código reutilizable que puede tomar valores para transformarlos. Además puede retornar algún valor.

/*SINTAXIS BASICA
Function nombreDeLaFuncion(){
    Código de mi función
    Todo este código se ejecutará cada vez que yo llame a la función
}

DATO IMPORTANTE: 
*/

//Ejemplo básico: Escribe un saludo, muestra un número y muestra tu nombre;

//FORMA "NOMRAL"
console.log("Inicio");
console.log("Buenas noches");
console.log(25);
console.log("Grace");
console.log("Fin");
//Repetirlo hasta el cansancio

//Definir una función (La forma correcta en vez de crear)
function mostrarMensaje() {
    //Código de la función
  console.log("Inicio");
  console.log("Buenas noches");
  console.log(25);
  console.log("Grace");
  console.log("Fin");
}

//Llamar a la función (NO OLVIDAR LOS PARÉNTESIS)
mostrarMensaje(); //Con la llamada se ejecuta su código
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();

//RETO 1: Crea una función que imprima los números del 1 al 10 (1 por 1)
function numerosReto() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}
numerosReto();
numerosReto();
numerosReto();
numerosReto();

/* llamamos a la función
showNumbers();
showNumbers();

parámetros: Son valores que son ppasados a la funcion para que esta los pueda suar, transformar, etc.

function nombreFunción(a;b) {
    Código de mi función
    Dentro de mi función podría hacer cosas con los valores a y b
}
Ejemplo: Crear una función que toma dos numeros y muestre su suma

SCOPE_ ALCANCE, hace referencia a un bloque de codigo que una variable puede ser usada
*/

function addTwoNumbers(x, y) {
    let result = x + y;

    console.log(`El resultado de ${x} + ${y} = ${result}`);
}
//Llamar a la función
addTwoNumbers(4, 5);

let num1 = 10;
let num2 = 20;

//Cuando pasa los valores de los parámetros, estos se llaman argumentos
addTwoNumbers(num1, num2);

console.log("RETORNO DE VALORES")

//reTORNO DE VALORES-> es la caracerística que tiene una funicón de retornar un valore al finalizar su ejecución. Ese valor puede ser almacenado en una variable o usado directamente.

//Ejemplo: Crear una funicón que reciba como parámetros un nombre y retorno un mensaje de saluda

function great(targetName) {
    let message = `Hola ${targetName}, ¿cómo estás?`
    
    //Retorno de un dato
    return message;
}

let name = `Grace`;

//Llamada a la función, al retornar un valor, podemos almacenarlo
let greetMessage = great(name);
//Y luego usamos ese dato almacenado
console.log(greetMessage);

//O también podemos usar el valor d eretorno directamente
console.log(great(name));

//Arrow function -> Son una sintaxis distinta para escribir funciones, fueron introducidas en ECMAS 2016. Se llaman así por el símbolo de =>
        //Son funciones anónimas.

let value1 = 14;
let value2 = 5;

let multiplyTwoNumbers = (a, b) => {
    console.log(`Factor 1 -> ${a}`);
    console.log(`Factor 2 -> ${b}`);

    let result = a * b;
    let message = `${a} x ${b} = ${result}`;

    return message;
};

console.log(multiplyTwoNumbers(value1, value2));

/*
function multiplyTwoNumbers(a, b) {
    console.log(`Factor 1 -> ${a}`);
    console.log(`Factor 2 -> ${b}`);

    let result = a * b;
    let message = `${a} x ${b} = ${result}`;

    return message;
}

console.log(multiplyTwoNumbers(value1, value2)); */
