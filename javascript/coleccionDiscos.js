/*
Tenemos un objeto que representa parte de una colección de álbumes musicales.
Cada album tiene un numero de identificacion unico(id) asociado a otras propiedades.
No todos los albumes tienen la información completa.
*/
let coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin' Alive"]
    },
    5439: {
        tituloDelAlbum: "Abba Gold"
    }
};
/*
Define una función actualizarDiscos que tome los siguientes parámetros:
- discos(el objeto que representa la colección de discos).
- id.
- propiedad ("artista" o "canciones").
- valor.

Tu meta es completar la función implementando las siguientes reglas para modificar
el objeto pasado a la función:
- Si "valor" es una cadena vacía, elimina la propiedad del album correspondiente.
- Si "propiedad" es igual a la cadena de caracteres "canciones" pero el album, no tiene una
propiedad llamada "canciones", crea un arreglo vacío y agrega "valor" a ese arreglo
- Si "propiedad" es igual a la cadena de caracteres "canciones" y "valor" no es una
cadena vacía, agrega "valor" al final del arreglo de canciones del álbum correspondiente.
*/

function actualizarDiscos(discos, id, propiedad, valor) {
    if(valor === "") {
        delete discos[id][propiedad];
    } else if(propiedad === "canciones") {
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
}
console.log(coleccionDeDiscos[7853].tituloDelAlbum);//Bee Gees Greatest
actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");
console.log(coleccionDeDiscos[7853].tituloDelAlbum);//undefined

console.log(coleccionDeDiscos[5439].canciones);//undefined
actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "Mamma Mia");
console.log(coleccionDeDiscos[5439].canciones);//Mamma Mia

console.log(coleccionDeDiscos[5439].artista);//undefined
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "abba");
console.log(coleccionDeDiscos[5439].artista);//abba