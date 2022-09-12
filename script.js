// h1 {color:red }
// .parrafito { ... }
// #pid { ...}

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', SumarInputValues);


function SumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const sumresult = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumresult;
};

// Si se especifica de forma manual para el selectot button en la clase como tipo button se evita que se recargue la pagina web


