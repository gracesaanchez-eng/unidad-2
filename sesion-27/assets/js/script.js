console.log("HOLA CHICASSSS");

/*CONDICIONALES

sirven para evaluar una pregunta y de acuerdo al resultado, se realiza una u otra cosa.
Una condición te va a devolver un booleano, ese es el valor que se evalua.

SINTAXIS

if (condicion) 
    //codigo a ejecutar si la condicion es verdadera
else 
    //codigo a ejecutar si la condicion es falsa

Por pasos:
1. Palabra reservada if
2. Entre paréntesis va la condición a evaluar
3. Abrimos un bloque de código con llaves {}
4. Dentro de ese bloque colocamos el código que se ejecutará si la condición es verdadera
*/

// Ejemplo de un programa que indica si un nombre es largo. Para esto se pregunta si el nombre tiene más de 7 carácteres.
let nombre = "mia";

//CONDICIÓN
if (nombre.length > 7) {
    //Código a ejeecutar si la condición es verdadera (true)
  console.log("Tu nombre es largo");
  console. log("SE EJECUTA SI ES VERDADERO");
}

if (nombre.length < 5) {
    console.log("Tu nombre es corto");
}

console.log("----------------------------------");

/*if...else
    Sintaxis
if (condicion) {
    código
} else {
    código si es falso
} */

    nombre = "Esmeralda";
    //Completemos el ejemplo anterior
if (nombre.length > 7) {
    console.log("Tu nombre muy largo causa");
} else {
    console.log("Tu nombre es corto")
}

let edad = 17;
if (edad > 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

/*if...else
    Sintaxis
if (condicion) {
    código
} else if (otraCondicion) {
    código a ejecutar si la otra condición se cumple
} else 
//código a ejecutar si ninguna de las condiciones se cumple
} */

let numero1 = 5;
let numero2 = 8;
if (numero1 > numero2) {
    console.log(El numero mayor es: ${numero1});
} else if (numero2 > numero1){
    console.log(´El numero mayor es: ${numero2}´);
} else {
    console.log("Los numeros son iguales");
}
