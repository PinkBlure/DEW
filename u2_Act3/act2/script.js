const body = document.getElementById('body');

const operacion = document.createElement('p');
const operacion1 = document.createElement('p');
const operacion2 = document.createElement('p');
const operacion3 = document.createElement('p');

const div8 = (oper, num, n) => {
    oper.innerHTML = `${num} / ${n} = ${num >> 3}<br>`
}

const mult4 = (oper, num, n) => {
    oper.innerHTML = `${num} * ${n} = ${num << 2}<br>`
}

const div2 = (oper, num, n) => {
    oper.innerHTML = `${num} / ${n} = ${num >> 1}<br>`
}

const mult16 = (oper, num, n) => {
    oper.innerHTML = `${num} * ${n} = ${num << 4}<br>`
}

div8(operacion, 125, 8);
mult4(operacion1, 40, 4);
div2(operacion2, 25, 2);
mult16(operacion3, 10, 16);

body.appendChild(operacion);
body.appendChild(operacion1);
body.appendChild(operacion2);
body.appendChild(operacion3);