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

//Aqui copiamos el array:
const primerArr = [].concat(arr);

console.log("aqui");
console.log(primerArr);
console.log(arr.sort());
console.log(arr.reverse(), arr.length);
let respuestaBusqueda = parseInt(prompt("Que numero desea?"))
console.log(arr.includes(respuestaBusqueda));
console.log(primerArr);
console.log(primerArr.indexOf(respuestaBusqueda));