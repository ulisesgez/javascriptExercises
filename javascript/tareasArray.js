/*
Pida 6 numeros por pantalla y los meta en un array,
mostrar el array entero,


var numeros  = new Array(6);
for(var i = 0; i <= 5; i++) {
    numeros[i] = parseInt(prompt("introduce un numero", 0));
}
console.log(numeros);

//otra forma:

var numeros  = [];
for(var i = 0; i <= 5; i++) {
    numeros.push(parseInt(prompt("introduce un numero", 0)));
}
console.log(numeros);

ordenarlo y mostrarlo,
invertir su orden y mostrarlo,
mostrar numero de elementos del array,
busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice.
*/

let arr = [];
for(let i = 0; i < 6; i++) {
    arr.push(parseInt(prompt("Ingresa 1 numero")))
}
console.log(arr);

const ordenar = (arr) => {
    return console.log(arr.sort(), arr.reverse(), arr.length);
}

const buscar = (arr) => {
    let respuestaBusqueda = parseInt(prompt("Que numero desea?"))
    return console.log(arr.includes(respuestaBusqueda), arr.indexOf(respuestaBusqueda));
}

const resultados = (arr) => {
    ordenar(arr);
    buscar(arr);
}

resultados(arr);