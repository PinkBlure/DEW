const body = document.getElementById('body');

const mult = document.createElement('p');
const line = document.createElement('hr');
const suma = document.createElement('p');
const line2 = document.createElement('hr');
const dividir = document.createElement('p');

mult.innerHTML = ``;
for(let i = 0; i<= 10; i++) {
    mult.innerHTML += `7 x ${i} = ${7*i}<br>`;
}

suma.innerHTML = ``;
let i = 0;
while (i <= 10) {
    suma.innerHTML += `8 + ${i} = ${8+i}<br>`;
    i++;
}

dividir.innerHTML = ``;
i = 0;
do {
    dividir.innerHTML += `9 / ${i} = ${9/i}<br>`;
    i++;
} while (i<=10);

body.appendChild(mult);
body.appendChild(line);
body.appendChild(suma);
body.appendChild(line2);
body.appendChild(dividir);
