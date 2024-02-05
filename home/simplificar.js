/*
Simplicar el codigo a continuacion:

function crearPersona(nombre, apellido, edad) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
}

const persona = crearPersona('Juan', 'Perez', 25);
console.log(persona);
*/

const crearPersona = (nombre, apellido, edad) => ({nombre, apellido, edad});

const persona = crearPersona('Juan', 'Perez', 25);
console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}
/*
Funciones flecha y argumentos:

function imprimeArgumentos() {
    console.log(arguments);
}

No es posible usar arguments en funciones flecha, pero se puede usar el operador rest:

function imprimeArgumentos2 = () => {
    console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Juan', 'Perez');

Error: arguments is not defined:
imprimeArgumentos2(10, true, false, 'Juan', 'Perez');

Para funciones flecha se usa el operador rest:
*/
const imprimeArgumentos2 = (...args) => {
    console.log(args);
}
imprimeArgumentos2(10, true, false, 'Juan', 'Perez');