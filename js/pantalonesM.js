const url = 'http://localhost:3000/';

document.addEventListener('DOMContentLoaded', () => {
    consultarBuzos();
});

function consultarBuzos() {
    const urlApi = `${url}pantalonesmujer`;

    fetch(urlApi)
        .then(respuesta => respuesta.json())
        .then(resultado => imprimirBuzos(resultado))
        .catch(error => console.log(error));
}

async function imprimirBuzos(buzos) {
    const container = document.getElementById('buzo-container-hombre')
    // Limpia el contenedor antes de agregar nuevos elementos
    container.innerHTML = '';

    const promises = buzos.map(buzo => {
        const div = document.createElement('div');
        div.classList.add('BUZO');

        const img = document.createElement('img');
        img.classList.add('IMG-BUZO')
        img.src = buzo.img;
        img.alt = 'Imagen de un Buzo';

        const precio = document.createElement('p');
        precio.classList.add('PRECIO');
        precio.textContent = `$${buzo.precio}`;

        const nombre = document.createElement('p');
        nombre.classList.add('NOMBRE');
        nombre.textContent = buzo.name;

        const button = document.createElement('BUTTON')
        button.textContent = "Añadir al Carrito"
        button.classList.add('BOTON-ANIDAR')


        div.appendChild(img);
        div.appendChild(nombre);
        div.appendChild(precio);
        div.appendChild(button);
        container.appendChild(div);
    });

    // Wait for all promises to resolve
    await Promise.all(promises);
}