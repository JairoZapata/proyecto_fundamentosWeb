const carrosPerPage = 14;
let currentPage = 1;

const displayCarros = (carros) => {
    const carrosContainer = document.getElementById('carros-container');
    carrosContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * carrosPerPage;
    const endIndex = startIndex + carrosPerPage;
    const displayedCarros = carros.slice(startIndex, endIndex);

    displayedCarros.forEach(carro => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${carro.imagen}" alt="${carro.nombre}">
            <h2>${carro.nombre}</h2>
            <p><strong>Categoría:</strong> ${carro.categoria}</p>
            <p><strong>Código Producto:</strong> ${carro.codigoProducto}</p>
            <p><strong>Precio:</strong> ${carro.precio}</p>
            <p><strong>Modelo:</strong> ${carro.modelo}</p>
            <p><strong>Transmisión:</strong> ${carro.transmicion}</p>
            <p><strong>Color:</strong> ${carro.color}</p>
        `;
        carrosContainer.appendChild(card);
    });
}

const displayPagination = (totalCarros) => {
    const totalPages = Math.ceil(totalCarros / carrosPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
            currentPage = i;
            displayCarros(carros);
            displayPagination(carros.length);
        });
        paginationContainer.appendChild(button);
    }
}


window.onload = () => {
    // Recuperar los carros del localStorage o usar la lista vacía si no hay datos
    const carrosRegistrados = JSON.parse(localStorage.getItem('carros')) || [];
    // Si hay carros registrados, mostrarlos en la página
    if (carrosRegistrados.length > 0) {
        carros = carrosRegistrados;
        displayCarros(carros);
    }
    // Mostrar paginación 
    displayPagination(carros.length);
};
