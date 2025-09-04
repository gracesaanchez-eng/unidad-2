//Imagina que esto implementa una función en tu APP
console.log("Empezando la función")


/*Los datos en prompt siempre se guardan como strings por defecto.

Para comvertir a number, envolvemos prompt() en
    parseInt() para enteros
    parseFloat) para decimales*/

//let name = prompt("Ingresa un número");
//console.log(`Buenas noches ${name}`)
let num1 = parseInt(prompt("Ingresa un número "));
let num2 = parseFloat(prompt("Ingresa otro número"));

console.log(`${num1} + ${num1} = ${num1 + num2}`);

//RETO: Crea un programa que pida un número entero al usuario, e indique si este número es par o no.
let number = parseInt(prompt("Ingresa un número"));

if (number % 2 === 0) {
    console.log(`${number} es par`);
} else {
    console.log(`${number} es impar`)
}