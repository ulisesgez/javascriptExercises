//Que queremos selecioionar:
//Tenemos metodos para seleccionar los elementos que tenemos en el html que esta ejecutando a nuestro codigo javascript

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const dos = document.querySelector('.parrafoDos');
const tres= document.getElementById('parrafoTres');//Ya no le colocamos #, como:
//const tres= document.querySelector('#parrafoTres');
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
//h1.classList.toggle('titulo')
//h1.classList.contains('titulo')

input.value = "456"//Le damos un valor por defecto

// Crear elemento desde cero

//Podemos crear el elemento html que querramos:
//document.createElement('img');

console.log(document.createElement('img'));// <img>
console.log(document.createElement('span'));// <span></span>

//Para poder ver la imagen con createElement:

const img = document.createElement('img');
img.setAttribute('src', 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
console.log(img);//Solo se vera en consola

//Insertamos imagen dentro de un contenedor, dentro de otro elemento que ya existia en html:

tres.append(img);
//tres.innerHTML = img;Trata de traducir, lo convierte en string

/*
Con esto eliminammos el texto (contenido, en este caso "Párrafo tres, id") y se coloca directamente la imagen:
tres.append(img);
tres.innerHTML = "";
*/