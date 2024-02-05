/*
Programa una función que dada una cadena de texto cuente el número
de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales:
4, Consonantes: 5.
*/
const contarLetras = (cadena = "") => {
    if (!cadena) return console.warn("No ingresaste una cadena de texto")
	if(typeof cadena !== "string") return console.warn("El valor ingresado no es de tipo string");
    let vocales = 0;
    let consonantes = 0;

    cadena = cadena.toLocaleLowerCase();

    for(let letra of cadena) {
        if(/aeiouáéíóú/.test(letra)) vocales++;
        if(/bcdfghjklmnpqrstvwxyz/.test(letra)) consonantes++;
    }
    return console.info({
        cadena,
        vocales,
        consonantes
    })
}
contarLetras();//No ingresaste una cadena de texto
contarLetras(3);//El valor ingresado no es de tipo string
contarLetras("Hola Mundo");//{cadena: "hola mundo", vocales: 4, consonantes: 5}
contarLetras("Hola Mundo 123");//{cadena: "hola mundo 123", vocales: 4, consonantes: 7}