/*
Programa una función que calcule el factorial de un número
(El factorial de un entero positivo n, se define como el producto
de todos los números enteros positivos desde 1 hasta n),
pe. miFuncion(5) devolverá 120.
*/
function factorial (n) {
	let total = 1;
	for (i = 1; i <= n; i++) {
		total = total * i;
	}
	return console.log(total);
}

factorial(5);//120
factorial(10);//3628800

/*
Solucion:

const factorial = (numero = undefined) => {
	if(numero === undefined) return console.warn("No ingresaste un número");
	if(typeof numero !== "number") return console.warn("E valor ingresado no es de tipoi number");
	if(numero === 0) return console.error("El número no puede ser 0");
	if(Math.sign(numero) === -1) return console.warn("El número no pude ser negativo");

	let factorial = 1;

	for(let i = numero; i>1; i--) {
		factorial *= i;
	}

	return console.info(`El factorial de ${numero} es ${factorial}`);
}

factorial();
factorial(10);
factorial(5);
factorial([1, 2, 3]);
*/