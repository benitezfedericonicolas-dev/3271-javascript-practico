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

h1.innerHTML = '<i>Subele la radio que esta es mi cancion</i>';
// inserta codigo html

primerParrafo.innerText = 'Esta etiqueta <b> no deberia verse pero se ve porque es un .innerText <b> y no un .innerHTML';
//inserta texto

console.log(h1.getAttribute('holderplace'));
// getAttribute devuelve el valor del atributo, igual que poner h1.holderplace

input.setAttribute('class', 'claseInput');
//define un atributo y lo asigna

segundoParrafo.classList.add("superClase");
//Metodo especifico de clases. Submetodo para agregar una nueva clase.

primerParrafo.classList.remove("parrafinio");
//Metodo especifico de clases. Submetodo para quitar una nueva clase.

input.id = "npt_generico";
//Esta es otra forma de acceder al seteo de propiedades. Se trata como un objeto de hecho. input.id devuelve el id si hiciera falta

const img = document.createElement('img');
img.src = ('./imagen.png');
img.classList.add("img");
segundoParrafo.append(img);
/* 
La primer linea sirve para crear un elemento html. La etiqueta sera img
El segundo determina la funete del source
La tercer linea (vista mas arriba) agregale una clase
El ultimo codigo inserta a img en el segundoParrafo
*/



/* queda pendiente 
    .appendChild()
    .classList.toggle(...)
    .classList.contains(...) que devuelve true o false depende si contiene o no algo.
*/