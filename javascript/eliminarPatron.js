/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const eliminarCaracteres = (texto = "", patron = "") =>
(!texto)
    ?console.warn("no ingresaste un texto")
    :(!patron)
        ?console.warn("No ingresaste un patron de caracteres")
        //Haciendo uso de expresiones regulares donde i es para decir que omita mayusculas y minusculas,
        //g o general que no solo se haga en 1 si no entodo el teto(palabras)
        //Remplace: 1 er termino busca lo solicitado en este caso lo que esta en RegExp,
        //para luego remplazarlo con nada: "", automaticamente lo removera
        :console.info(texto.replace(new RegExp(patron, "ig"), ""));

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");