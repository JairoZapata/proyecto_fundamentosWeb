console.log("Prueba");

let carros = JSON.parse(localStorage.getItem('carros'));

const buscar = () => {
    const nombre = document.getElementById('nombre').value.toLowerCase();
    const categoria = document.getElementById('categoria').value.toLowerCase();
    const modelo = document.getElementById('modelo').value;
    const tbody = document.getElementById('tablaResultados').getElementsByTagName('tbody')[0];

    tbody.innerHTML = `<tr><td colspan="8">Buscando...</td></tr>`;

    setTimeout(() => {
        const resultados = carros.filter(carro => 
            (nombre === "" || carro.nombre.toLowerCase().includes(nombre)) &&
            (categoria === "" || carro.categoria.toLowerCase().includes(categoria)) &&
            (modelo === "" || carro.modelo.toString() === modelo)
        );
    
        mostrarResultados(resultados);
    }, 2000);    
}

const mostrarResultados = (resultados) => {
    const tbody = document.getElementById('tablaResultados').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ""; // Limpiar resultados anteriores

    resultados.forEach(carro => {
        const row = tbody.insertRow();
        row.insertCell(0).innerText = carro.nombre;
        row.insertCell(1).innerText = carro.categoria;
        row.insertCell(2).innerHTML = `<img src="${carro.imagen}" alt="${carro.nombre}" width="30">`;
        row.insertCell(3).innerText = carro.codigoProducto;
        row.insertCell(4).innerText = carro.precio;
        row.insertCell(5).innerText = carro.modelo;
        row.insertCell(6).innerText = carro.transmicion;
        row.insertCell(7).innerText = carro.color;
    });
}