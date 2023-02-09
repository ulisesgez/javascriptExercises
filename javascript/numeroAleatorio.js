/*
Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

const aleatorio = (min, max) => console.log(Math.round(Math.random() * (max - min) + min));

aleatorio(501, 600);

/*
Solución:
const aleatorio = () => console.info(Math.round(Math.random() * 100) + 500);
*/