//Que queremos selecioionar:
//Tenemos metodos para seleccionar los elementos que tenemos en el html que esta ejecutando a nuestro codigo javascript

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const dos = document.querySelector('.parrafoDos');
const tres= document.querySelector('#parrafoTres');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    dos,
    tres,
    input
});
// Imprime: <h1>Manipulación del DOM Básica</h1>
console.log(h1);

//Itroducimos un valor, y colocamos lo siguiente en la consola del navegador, como valor nos dar lo introducido:
console.log(input.value);

h1.innerHTML = 'Soy titulo <br> estoy abajo';//Nuestro titulo va a cambiar, modificamos html

//Aqui si se imprime Soy titulo dos <br> estoy abajo
//h1.innerText = 'Soy titulo dos <br> estoy abajo'

/*
Modificar un atributo getAtribute y setAtibute
*/

//h1.getAttribute('attribute');
console.log(h2.getAttribute('attribute'));//hello

//setAttribute para modificar:

h2.setAttribute('attribute', 'atTribute');//set para modificar atributos

/*
En elements del navegador podremos visualizar que el atributo se modifico:
<h2 attribute="atTribute">Texto para atributos</h2>
*/

h1.classList.add('titUlO')//Aqui modificamos una clase en especifico, en esta parte nos pareceran las dos clases una del html por defecto y la otra que estamos añadiendo
h1.classList.remove('titulo')//Aqui le removimos una clase de las dos, por lo que queda titUlO