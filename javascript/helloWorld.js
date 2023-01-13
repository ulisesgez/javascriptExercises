console.log("hello world");

//Que queremos selecioionar:
//Tenemos metodos para seleccionar los elementos que tenemos en el html que esta ejecutando a nuestro codigo javascript

const h1 = document.querySelector('h1');
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