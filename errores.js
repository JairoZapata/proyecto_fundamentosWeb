console.log("Holaaa");

let errores = JSON.parse(localStorage.getItem("errores"));
let listaErrores = document.getElementById("listaErrores");

errores.forEach((error) =>{
    let li = document.createElement("li");
    li.textContent = error;
    listaErrores.appendChild(li);
})

localStorage.removeItem("errores");
