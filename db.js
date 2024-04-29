let carros = [
    {
        nombre: "Toyota Corolla",
        categoria: "Compacto",
        imagen: "toyota_corolla.jpg",
        codigoProducto: "TC001",
        precio: 25000,
        modelo: "2022",
        transmicion: "Mecanico",
        color: "Negro"
    },
    {
        nombre: "Ford Mustang",
        categoria: "Deportivo",
        imagen: "ford_mustang.jpg",
        codigoProducto: "FM002",
        precio: 40000,
        modelo: "2023",
        transmicion: "Automatico",
        color: "Blanco"
    },
    
];

const handleSubmit = (event) => {
    event.preventDefault();

    // Validar el formulario
    const formulario = document.getElementById("registroForm");
    const errores = [];

    if (formulario.nombre.value === "") {
        errores.push("El campo Nombre es obligatorio.");
    }

    if (formulario.categoria.value === "") {
        errores.push("El campo Categoría es obligatorio.");
    }

    if (formulario.imagen.value === "") {
        errores.push("El campo Imagen es obligatorio.");
    }

    if (formulario.codigo.value === "") {
        errores.push("El campo Código Producto es obligatorio.");
    }

    if (formulario.precio.value === "") {
        errores.push("El campo Precio es obligatorio.");
    }

    if (formulario.modelo.value == "") {
        errores.push("El campo Modelo es obligatorio.");
    }

    if (formulario.transmicion.value == "") {
        errores.push("El campo Transmicion es obligatorio.");
    }

    if (formulario.color.value == "") {
        errores.push("El campo Color es obligatorio.");
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return false; // Evitar que el formulario se envíe
    }

    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const imagen = document.getElementById("imagen").value;
    const codigo = document.getElementById("codigo").value;
    const precio = document.getElementById("precio").value;
    const modelo = document.getElementById("modelo").value;
    const transmicion = document.getElementById("transmicion").value;
    const color = document.getElementById("color").value;

    const nuevoCarro = {
        nombre,
        categoria,
        imagen,
        codigo,
        precio,
        modelo,
        transmicion,
        color
    }

    carros.push(nuevoCarro);

    alert("¡El carro ha sido registrado correctamente!");

    document.getElementById("registroForm").reset();
};

const mostrarErrores = (errores) => {
    localStorage.setItem("errores", JSON.stringify(errores));
    window.location.href = "errores.html";
}

