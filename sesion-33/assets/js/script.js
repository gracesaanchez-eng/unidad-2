/*
Seleccionamos elementos del DOM gracias al objeto "document" y algunos de sus métodos:

getElementById("nombre-id") -> obtiene el elemento id "nombre-id"
*/
//NOTA: SOLO UN LELEMTO PUEDE TENER UN ÚNICO ID, Y CLASS PARA VARIOS ELEMENTOS

//Seleccionando un elemento por ID y al almacenarlo en una variable
let mainTitle = document.getElementById("main-title");

//Mostramos el elemento
console.log(mainTitle);
//Mostramos el contenifo de mainTitle
console.log(mainTitle.innerText);
//Actualizamos el contenido dinámicamente
mainTitle.innerText = "Título cambiado dinámicamente";
//Mostramos el contenido mainTitle nuevamente
console.log(mainTitle.innerText);

//getElementsByClassName("nombre-clase") -> obtiene todos los elementos con la clase "nombre-clase"
//Esto devuelve un arreglo, aunque solo sea un elemento
let mainTexts = document.getElementsByClassName("main-text")
console.log(mainTexts) //Esto es un arreglo y sus elementos con Elementos HTML

//Accedemos a un elemento y mostramos su contenido
console.log(mainTexts[0].innerText)
//Modifican el contenido
mainTexts[0].innerText = "Prárrafo cambiado";

//getElementsByTagName("nombre") -> obtiene todos los elementos con la etiqueta "nombre"
let subtitles = document.getElementsByTagName("h2");
console.log(subtitles);
console.log(subtitles[0].innerText);
console.log(subtitles[1].innerText);
console.log(subtitles[2].innerText);

/* electores por css, se llaman así porque usan la sintaxis de un selector CSS para seleccionar los elementos del DOM

querySelector("selector") -> Devuelve un arreglo de elementos que coincida con el selector

querySelectorAll("selector") -> Devuelve un arreglo de elementos que coincidan con el selector
*/

//let mainTitle = document.getElementsById("main-title");
let queryMainTitle = document.querySelector("main-title")
console.log(queryMainTitle);
//let mainText = document.getElementsByClassName("main-text");
let queryMainTexts = document.querySelectorAll(".main-text");
console.log(queryMainTexts);

//EVENTOS
console.log("EVENTOS");
/*Selecciono un elemento y le agrego un evento. No es encesario almacenar el elemento en alguna variable
//[SELECCIONAR ELEMENTO].addEventListener("nombre-evento, función() {
//FUNCIONA A EJECURAR CUANDO SUCEDA EL EVENTO
}) */
document.getElementById("main-button").addEventListener ("click", function () {
    //CÓDIGO A EJECURAR CUANDO SUCEDA EL EVENTO
    console.log("BOTON PRESIONADO");

    let mainButton = document.getElementById("main-button");

    //Podemos cambiar estilos
    //document.body.style.backgroundColor = "red";

    let currentBackgroundColor = document.body.style.backgroundColor;

    //Cambiando color de forma condicional
    if (currentBackgroundColor != "red") {
        document.body.style.backgroundColor = "red";
        mainButton.style.color = "white"
    } else {
        document.body.style.backgroundColor = "white";
        mainButton.style.color = "red";
    }

    //Obtener el valor ingresando el input
    //Accedemos a la prioridad value
    //Accedemos a la propiedad value
    let magicNumber = document.querySelector("#magic-number").value;
    
    console.log(`Valor ingresado en el input: ${magicNumber}`);

    //Mostramos el valor en el contenido de un elemento
    let greetParagraph = document.querySelector("#greet");
    /*greetParagraph.innerText = `Buenas noches ${magicNumber}`;*/

    if (magicNumber == "" || magicNumber.length === 0) {
        greetParagraph.innerText = `NO INGRESASTE UN NOMBRE`
    } else {
        greetParagraph.innerText = `Buenas noches ${magicNumber}`;
    }
});

//Evento de click en otro botón
//Seleccionamos el botón
let togglerButton = document.querySelector("#toggler");
//Seleccionamos el texto
let hiddenText = document.querySelector("#hidden-text");
//Fijamos el contenido
hiddenText.innerText = "MOSTRAR"
//Lo acultamos directamente
hiddenText.style.display = "none";

//Agregamos el event listener
togglerButton.addEventListener("click", function () {
    let currentTextDisplay = hiddenText.style.display
    //Si el botón está oculto
    if (currentTextDisplay == "none") {
        //Lo muestro
        hiddenText.style.display = "block";
        togglerButton.innerText = "OCULTAR";
    } else {
        // Si no está oculto, lo oculto
        hiddenText.style.display = "none";
        togglerButton.innerText = "MOSTRAR";
    }
})

//FORMA CORRECTA DE CAMBIAR ESTILOS
// (Este bloque es duplicado y puede eliminarse porque ya está arriba)
