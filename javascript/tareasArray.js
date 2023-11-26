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
let respuestaBusqueda = 0;

const numeros = (arr, respuestaBusqueda) => {
    for(let i = 0; i < 6; i++) {
        arr.push(parseInt(prompt("Ingresa 1 numero")))
    }
    //Array introducido:
    console.log(`Array introducido:\n${arr}`);
    
    //Aqui copiamos el array:
    const primerArr = [].concat(arr);
    
    console.log(`Array ordenado:\n${arr.sort()}\nArray ordenado inverso:\n${arr.reverse()}\nLongitud del array:\n${arr.length}`);
    respuestaBusqueda = parseInt(prompt("¿Que numero desea saber si pertenece al array antes introducido?"));
    if(arr.includes(respuestaBusqueda) && primerArr.indexOf(respuestaBusqueda) >= 0) {
        console.info(`Existe el valor ${respuestaBusqueda} dentro del primer array\nEl valor ${respuestaBusqueda} se encuentra en la posicion ${primerArr.indexOf(respuestaBusqueda)} del primer array`);
    } else {
        console.error(`No existe el valor ${respuestaBusqueda} dentro del primer array`);
    }
}

numeros(arr, respuestaBusqueda);