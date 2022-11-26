//los siguientes son ordenes que solo funcionan en el explorador como entorno de ejecucion.
const h1 = document.querySelector('h1');
const primerParrafo = document.querySelector('.parrafinio');
const segundoParrafo = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    primerParrafo,
    segundoParrafo,
    input
});

/*
constante nombreDeConstante = document.querySelector('etiqueta');
constante nombreDeConstante = document.querySelector('.clase');
constante nombreDeConstante = document.querySelector('#id');

constante nombreDeConstante = document...
    ....querySelector('etiqueta') para el primer caso de dicha etiqueta
    ....querySelectorAll('etiqueta') para seleccionar todos los casos
    ....getElementById('#id') Hace lo mismo pero solo funciona con ID. Asume individualidad
    ....getElementsByClass('.etiqueta') Hace lo mismo pero solo funciona con clases. Asume pluralidad

const input = document.querySelector('input');
    console.log(input.value); //devuelve el valor de la propiedad value
    console.log(input.hidden), //devuelve el valor de la propiedad hidden, el cual seguramente sea f
*/