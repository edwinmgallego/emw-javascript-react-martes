// Definir un objeto JSON
const usuario = {
    "nombre": "Cristian",
    "edad": 30,
    "habilidades": ["JavaScript", "Vue.js", "Angular"],
    "activo": true
};

// Función para mostrar los datos en HTML
function mostrarPerfil() {
    // Obtener el div donde se mostrará el perfil
    const perfilDiv = document.getElementById("perfil");

    // Crear elementos HTML con los datos del JSON
    perfilDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${usuario.nombre}</p>
        <p><strong>Edad:</strong> ${usuario.edad}</p>
        <p><strong>Habilidades:</strong> ${usuario.habilidades.join(", ")}</p>
        <p><strong>Activo:</strong> ${usuario.activo ? "Sí" : "No"}</p>
    `;
}

// Llamar a la función para mostrar los datos
mostrarPerfil();
