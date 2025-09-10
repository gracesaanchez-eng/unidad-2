//Definición de objeto -> 

//MÉTODOS DE ARRAYS
let fruits = ["manzana", "naranja", "pera"];
console.log(fruits);

//push(x) -> Agrega el elemento x al final del arreglo
fruits.push("uva");
//Verificamos (por defecto se agrega al final)
console.log(fruits);

//pop(x) -> Quita el último elemento del arreglo y lo retorna
fruits.pop();
console.log(fruits);

fruits.pop();
console.log(fruits);

//unishift(x) -> Agrega el elemento x al inicio del arreglo
fruits.unshift("mango");
console.log(fruits);

//shift(x) -> Quita el primer elemento del arreglo y lo retorna
fruits.shift();
console.log(fruits);

//includes(x) -> Verifica si el array contiene el elemento x. Retorna un booleano
console.log(fruits.includes("manzana")); //false
console.log(fruits.includes("naranja")); //true

//indexOf(x) -> Retorna el índica del elemento x en el arreglo. Si no lo encuentra, retorna -1
console.log(fruits.indexOf("naranja"));

//join(x) -> Junta los elementos de un arreglo en una string. Por defecto usa el caracter de coma (,) y opcionalmente se le puede indicar el caracter con el que quieras juntar los elementos.
let fruitsString = fruits.join();
console.log(fruitsString)
//Indicamos otro caracter
console.log(fruits.join("."));

//Vuelve TODO A STRING
let randomArray = ["hola", 12, 34.5, true, "palabra"];
console.log(randomArray.join());

//slice(inicio, fin) -> Retorna una COPIA del arreglo original. Cortando desde el índice de "inicio" indicado. adicionalmente se le indica un índice de  "fin" y este es exclusivo. o sea no toma el elemento con el índice fin, sino el anterior

//Corta desde el índica 3 hasta el final
let sliceFruits = fruits.slice(3);
console.log(sliceFruits); //Nuevo arreglo generado
console.log(fruits); //El arreglo original se mantiene intacto
//Agregando un argumento de fin
console.log(fruits.slice(1, 4));

fruits = ["manzana", "naranja", "pera", "banana", "uva", "fresa"];

//splice(inicio, cantidad, elementos nuevos...) -> Modifica el arreglo original. Solo el argumento de inicio es obligatorio. Corta los elementos desde "inicio", elimina la "cantidad" de elementos indicada y por último agrega los "elementos nuevos" indicados desde esa posición.

//fruits.splice(2, 1);
//console.log(fruits); 

//Desde el elemento indice 2, elimina 3 elementos
//fruits.splice(2, 3)
//console.log(fruits)

//Desde el elemento con índice 2, elimina 3 elementos. Y desde esa posición agrefa los elementos nuevos...
fruits.splice(2, 1, "cereza", "sandia");
console.log(fruits);

let nums = [1, 2, 3, 4, 5, 6];
console.log(nums);

//map(función) -> Retorna una copia de arreglo y aplica la función indicada a cada uno de sus elementos
let numsMap = nums.map((x) => x * 2);
console.log(numsMap);

let numsToString = nums.map((x) => `Número ${x}`);
console.log(numsToString);

//filter(función)-> Retorna una copia del arreglo y aplica un filtrado por medio de la función. Solo retorna los elementos que cumplen con esa condicación de filtrado.
let filteredNums = nums.filter((x) => x % 2 === 0);
console.log(filteredNums);

//reduce(función, acumulador) -> Reduce todo el arreglo a un valor el cual es el resultado de aplicar la función reiteradamente. Además se indica un acumulador que va guardando el resultado a la par.
let sumOfAllElements = nums.reduce((a, b) => a + b, 0);
console.log(sumOfAllElements);

let productOfAllElements = nums.reduce((a, b) => a * b, 1);
console.log(productOfAllElements)

//OBJETO MATH
//Estos métodos siempre van despupes del objeto Math, este se pone con maypuscula al inicio.
//Math.round(x) -> Redondea el número x de la "forma común", es decir que si es mayor a .5 redondea hacia arriba, en todo caso redondea hacia abajo
console.log(Math.round(14.3)); //Redondea a 14
console.log(Math.round(14.8)); //Redondea a 18

//Math.ceil(x) -> Redondea el número x hacia arriba
console.log(Math.ceil(14.3)); //Redondea a 15

//Math.floor(x) -> Redondea el número hacia abajo
console.log(Math.floor(14.8)); //Redondea a 15