// Proyecto amigo secreto

// Array donde se almacenarán los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Capturamos el input de texto que ingresa el usuario
    let nombre = input.value.trim(); // Con trim() eliminamos espacios en blanco extra

    if (!nombre) { // Verificamos que el campo no esté vacío
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) { // Verificamos si el nombre ya está en la lista
        alert("El nombre ya fue añadido.");
        return;
    }

    amigos.push(nombre); // Agregamos el nombre al array
    input.value = ""; // Limpiamos el campo de entrada
    actualizarLista(); // Mostramos la lista actualizada
}

// Función para mostrar la lista de amigos en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join(""); // Generamos la lista dinámicamente
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Selección aleatoria
    document.getElementById("resultado").innerHTML = `<li>La amistad secreta es: <strong>${amigoSorteado}</strong></li>`; // Mostramos el resultado
}

// Enlazamos los eventos a los botones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnAgregar").addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});