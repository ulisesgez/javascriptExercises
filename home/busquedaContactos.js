/*
obtener valor en base al nombre y propiedad:
*/

var contactos = [
    {
        "nombre": "alan",
        "apellido": "perez",
        "numero": "1029384756",
        "gustos": ["correr, leer"]
    },
    {
        "nombre": "pablo",
        "apellido": "guzman",
        "numero": "5674893201",
        "gustos": ["comer, trotar"]
    },
    {
        "nombre": "victoria",
        "apellido": "gomez",
        "numero": "1234098756",
        "gustos": ["viajar, saltar"]
    }
];

function buscarPerfil(nombre, propiedad) {
    for(let i = 0; i <contactos.length; i++) {
        if(contactos[i].nombre === nombre) {
            //return contactos[i].propiedad, esto no lo hacemos debido a que lo va a buscar
            //y eso no lo queremos, lo que queremos hacer es remplazar el valor del parametro.
            return contactos[i][propiedad] || "la propiedad no existe"
        }
    }
    return "El contacto no esta en la lista de contactos"
}

console.log(buscarPerfil("pablo", "gustos"));
console.log(buscarPerfil("alan", "apellido"));
console.log(buscarPerfil("victoria", "numero"));
console.log(buscarPerfil("pablo", "direccion"));
console.log(buscarPerfil("luis", "apellido"));