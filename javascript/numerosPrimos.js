/*
Programa una función que determine si un número es primo
(aquel que solo es divisible por sí mismo y 1) o no,pe. miFuncion(7) devolverá true.
*/
const primo = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");
	if(typeof numero !== "number") return console.warn("E valor ingresado no es de tipo number");
	if(numero === 0) return console.error("El número no puede ser 0");
    if(numero === 1) return console.error("El número no puede ser 1");
	if(Math.sign(numero) === -1) return console.warn("El número no pude ser negativo");

    for(let i = 2; i < numero; i++) {
        if(numero %i === 0) {
            return console.log("No es primo");
        } else {
            return console.log("Es primo");
        }
    }
}

primo();
primo(4);
primo(5);
primo(0);
primo(1);
/*
//Solucion:

const numeroPrimo = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");
	if(typeof numero !== "number") return console.warn("E valor ingresado no es de tipo number");
	if(numero === 0) return console.error("El número no puede ser 0");
    if(numero === 1) return console.error("El número no puede ser 1");
	if(Math.sign(numero) === -1) return console.warn("El número no pude ser negativo");

    let divisible = false;//Si no ha encontrado nada
    for(let i = 2; i < numero; i++) {//igual a 2, por que no hay division entre 0 y todos son divisibles entre 1
        if((numero % i) === 0) {//En el momento que encuentre un numero divisible comprendido entre el 2 y uno sucesor a el se convierte en true y se rompe con break
            divisible = true;
            break;
        }
    }
    return (divisible)
    ?console.log("no es primo")//Ya que hobo division con otro numero diferente a el mismo y a la unidad
    :console.log("Es primo")//nunca cambio a falso
}

numeroPrimo();
numeroPrimo(4);
numeroPrimo(5);
numeroPrimo(0);
numeroPrimo(1);
*/