const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');
const form = document.querySelector('#formulario');

// btn.addEventListener('click', btnOnClick); Sin el form
/*
function btnOnClick() {
    console.log("Escuchando el evento de click");
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado " + sumaInputs;
}
*/
form.addEventListener('submit', sumaInputsValues);
function sumaInputsValues(event) {
    event.preventDefault();//Con esto el formulario no nos causa conflicto
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado " + sumaInputs;
}
