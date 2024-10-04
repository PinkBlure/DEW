const body = document.getElementById('body');
const form = document.getElementById('form');
const table = document.getElementById('table');
const notaMax = document.createElement('p');
const notaMin = document.createElement('p');
const media = document.createElement('p');
const aprobados = document.createElement('p');

body.appendChild(notaMax);
body.appendChild(notaMin);
body.appendChild(media);
body.appendChild(aprobados);

let notas = []

form.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const nota = parseFloat(document.getElementById('nota').value);

    notas.push(nota);

    const row = document.createElement('tr');
    row.innerHTML = `<td>${nombre}</td><td>${nota}</td>`;

    table.appendChild(row);

    notaMax.innerHTML = `La nota máxima es ${Math.max(...notas)}<br>`;
    notaMin.innerHTML = `La nota mínima es ${Math.min(...notas)}<br>`;

    let total = 0;
    for (let nota of notas) {
        total += nota;
    }

    media.innerHTML = `La nota media es ${total/notas.length}<br>`;

    let totalAprueba = 0;
    for (let nota of notas) {
        if (nota >= 5) {
            totalAprueba += 1;
        }
    }

    aprobados.innerHTML = `Hay un total de ${totalAprueba} alumnos aprobados`;
})

