console.log("Holaaaa");
/*Arrays: Son una estructura de datos, las estructuras de datos se laman así porque permiten almacenar más de un dato. Ecisten muchas extructuras de datos, cada una tiene un propósito.
PUeden almacenar datos de distinto tipo. Los datos almacenados los llamados "Elementos" y estos tienen un orden específico.

Un array es: Ordenado, indexable e iterable

Sintaxis:

let nombreArray = [1, 'hola', true, variable];
1. Empieza declarando una variable
2. El valor o conjunto de calores que toma debe estar encerrado en corchetes []
3. Dentro de los corvchetes poenemos los elementos array, separando cada una con una coma.

Crea un arreglo que guarde los números del 1 al 10*/
let numbers = [1,2,3,4,5,6,7,8,9,10];

//mostrar arreglo
console.log(numbers);

// Al igual que con una string, podemos acceder a los elementos por índice, además de obtener el tamalo (lenght) de un array
let size = numbers.length;

console.log(`El tamaño del arreglo es ${size}`);
console.log(`El primer elemento del arreglo es ${numbers[0]}`);
console.log(`El último elemento del arreglo es ${numbers[size - 1]}`);

//RETO 1: Crea un arreglo que almacene nombre de frutas
let fruits = [`uva`, `mango`, `pera`, `fresa`];
console.log(fruits);
let fruitsSize = fruits.length;

console.log(`El tamaño del arreglo es ${fruitsSize}`);
console.log(`El primer elemento del arreglo es ${fruits[0]}`);
console.log(`El último elemento del arreglo es ${fruits[fruitsSize - 1]}`);

/*BLUQUES O LOOPS - Estructura de repetición, repiten un bloque de código una cantidad de veces finita o infinita de veces.

For -> Bucle finito en JavaScript

SINTAXIS:
for (expresión incial: expresión condicional; expresión de actualización){
    //código a repetir
}

expresión inicial: Las condiciones de incio, declaras una variable con su valor inicial.
expresión condicional: Las condiciones que debe cumplir esa variavle para que el bucle se siga repitiendo
expresión de actualización: La forma en la que se va a actualizar la variable, puede ser un incremento o decremento.

Ejemplo: 
for (let i - 1; i <= 10; i++){
    //Código de bucle
}

let i = 1 -> Expresión inicial, declaramos una variable i con el valor 1
i <= 10 -> Expresión condicional, indica que el bucle se repetirá mientras el valor de i sea menor o igual que 10. Es decir, mientras que i <= 10 sea true
i++ -> Significa que la variable i aumentará su valor de 1 en 1
*/
for (let i = 1; i <= 10; i++){
    console.log(`BTS`)
}

// RETO 1: Muestra los números del 0 al 26 de 3 en 3
for (let i = 0; i <= 26; i += 3) {
    console.log(i);
}

//también podemos hacer conteos con negativos, inversos y disminuyendo
for (let i = 10; i >= 0; i--) {
    console.log(i); 
}

/* a = a + 1;
Se puede reducir

a += 1; ES LO MISMO QUE: a = a + 1 

TAMBIÉN SE PEUDE HACER CON RESTA*/
let num1 = 10;

num1 += 2;
console.log(num1);

//Si el valor de suma o resta es 1 se puede reducir a variable++
num1++;
console.log(num1);

num1--
console.log(num1);

/*Bucle while es un bucle infinito en JavaScript, los bucles infinitos se llaman así porque no tienen un número predeterminado de repeticiones, como lo hace for. También sigue la consigna de repetir el bucle mientras se cumpla una condición. Puede ser interreumpida de manera dinámica.

Sintaxis:
while (condición) {
    //Código a repetir
}
Evalua la condicación antes de ejecutar el código por primera vez, si la condición es true, ejecuta el código y vuelve a evaluar la condición. Si es false, no ejecuta el código y termina el bucle.

Ejemplo 1: Contando del 1 al 10, de 1 en 1 */

console.log("Numeros del 1 al 10");

let iterator = 1
while (iterator <= 10) {
    //Mostramos el número
    console.log(iterator);
    //Al final, aumentamos nuestro iterador
    iterator++;
}

//RETO: Mostrar los números del 15 al 75, de 5 en 5. Con bucle while
console.log("Números del 15 al 75, de 5 en 5");

let bucleWhile = 15
while (bucleWhile <= 75) {
    console.log(bucleWhile);
    bucleWhile += 5;
}

/*do...while -> Bucle infinito muy parecido a while, la diferencia es que este si o si, siempre ejecuta el código al menos una vez y luego empieza a evaluar la condición 

Sintaxis:

do {
    //Código del bucle
} while (condición); */

let doWhile = 14;

do {
    //Mostramos el número
    console.log(doWhile);
    //Al final, aumentamos nuestro iterador
    iterator++;
} while (doWhile <= 10);

//No importa si no se cumple la condición, de todas formas se ejecuta al menos una vez

/* iTERAR: -> Recorrer

Por eso si decimos que algo es iterable, significa que se puede recorrer sus elementos
*/

console.log("Iterar un arreglo");

let words = ["wiesse", "lima", "grau", "pte. nuevo", "penal"]
console.log(words);

/*Índice de inicio -> 0
Índice final -> array.length - 1
Actualización de los índices -> 1 en 1

//Interar sobre el arreglo words */
for (let i = 0; i <= words.length - 1; i++) {
    console.log(words[i]);
}

/* INVERTIR UN ARREGLO */
let auxWords = [];
for (let i = words.length - 1; i >= 0; i--) {
    auxWords.push(words[i]);
}