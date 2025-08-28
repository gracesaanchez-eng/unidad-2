/*OPERADORES

Operadores aritméticos o matemáticos

+-> suma
--> resta
*-> Multiplicación
/-> división
*/

/*Declaro mis variables*/
let num1 = 20;
let num2 = 17;

// Mostrar en consola
console.log(num1);
console.log(num2);

// Ahora los sumamos
console.log(num1 + num2);

// También podemos almacenar el resultado de la operaicón dentro de otra variable.

let resultadoSuma = num1 + num2;

console.log("RESULTADO SUMA")
console.log(resultadoSuma);

// Resta
let minuendo = 20;
let sustrayendo = 15;
let resta = minuendo - sustrayendo;

console.log("RESULTADO RESTA");
console.log(resta);

//Multiplicación
let factor1 = 18;
let factor2 = 5;
let producto = factor1 * factor2;

console.log("RESULTADO MULTIPLICACIÓN")
console.log(producto);

//dIVISIÓN
let dividendo = -30;
let divisor = 14.4;
let cociente = dividendo / divisor;

console.log("RESULTADO DIVISIÓN");
console.log(cociente)

//OPERACIÓN COMBINADA
console.log("OPERACIÓN COMBINADA");
console.log(15 + 43 / (4 + 8) *2);

/*Modulo %
Me devuelve el residuo de una división.

cuando el dividendo es mayor que el divisor dará el mismo resultado
*/
let moduloNum1 = 12;
let moduloNum2 = 5;
let resultadoModulo = moduloNum1 % moduloNum2;

console.log("RESULTADO MÓDULO");
console.log(resultadoModulo);

/*Potendia **

a**b -> Eleva el numero a a la potencia b
*/
let base = 2;
let exponente = 5;
let resultadoPotencia = base**exponente;

console.log("RESULTADO DE POTENCIA");
console.log(resultadoPotencia);

console.log(-------------------------------------);
console.log("OPERADORES DE QUE??");

/*OPERADORES DE COMPARACIÓN
> mayor que
< menor que
>= mayor igual que
<= menor igual que */
let valor1 = 23;
let valor2= 24;

//COMPARAMOS
let mayorQue = valor1 > valor2;
console.log(MayorQue);
console.log(valor1 < valor2);
console.log(valor1 >= valor2);
console.log(valor1 <= valor2);

console.log(------------------------------);
/*
== -> Operador de igualdad, me indica si dos valores son iguales. No le importa el tipo de dato.

=== -> Operador de identidad, me indica si dos valores son IDÉNTICOS. erifica que el valor y el tipo de dato sean los mismos.
*/
let datoNumber = 1; //number
let datoString = '1'; //string

//IGUALDAD
console.log(datoNumber == datoString); //true
//IDENTIDAD
console.log(datoNumber === datoString); //false

//DIFERENTES (NEGACIÓN DE LA IGUALDAD O IDENTIDAD)
console.log(datoNumber != datoString); // false
console.log(datoNumber !== datoString); //true

console.log(--------------------------------------------)
console.log("OPERADORES LÓGICOS");
/*OPERADORES LÓGICOS

Realizan operaciones lógicas entre valores booleanos.

&&(y, and)
||(o, or)
!(negación, not) */

//AND

console.log("AND")
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false

//OR

console.log("OR")
console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); //false

//NOT

console.log("NOT");
console.log(!true); //true
console.log(!false); //false
