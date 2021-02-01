'use strict'

//Función cambiar la imagen
function cambiar() {
    alert("¡¡¡NO SABES LO QUE HAS HECHO, INSENSATO!!!!");
    const imagen = document.querySelector("#enlace2");
    //console.log(imagen.outerHTML);
    const ancho = imagen.height
    const alto = imagen.width
    imagen.src="https://espaciolibros.com//wp-content/uploads/2017/10/mejores-comics-mortadelo-filemon-mortadelo-600x595.jpg"
    imagen.height = alto
    imagen.width = ancho
}

//Función mantener imagen
function mantener() {
    alert("Bien pensado...(o no)");
    const imagen = document.querySelector("#enlace2");
    //console.log(imagen.outerHTML);
    const ancho = imagen.height
    const alto = imagen.width
    imagen.src="https://mortadelo-filemon.es/images/photos/Francisco_Ibanez/ibanez1.jpg"
    imagen.height = alto
    imagen.width = ancho
}
