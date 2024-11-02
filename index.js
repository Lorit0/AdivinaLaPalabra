const palabras = [
    "amor",
    "alegria",
    "vitalidad",
    "esperanza",
    "gratitud",
    "serenidad",
    "felicidad",
    "generosidad",
    "empatia",
    "paz",
    "armonia",
    "confianza",
    "exito",
    "amistad",
    "optimismo",
    "entusiasmo",
    "prosperidad",
    "bondad",
    "solidaridad",
    "creatividad",
    "pureza",
    "libertad",
    "paciencia",
    "sabiduria",
    "tolerancia",
    "aprecio",
    "lealtad",
    "fortaleza",
    "equilibrio",
    "pasion",
    "respeto",
    "justicia",
    "dicha",
    "compromiso",
    "sinceridad",
    "sensibilidad",
    "dignidad",
    "grandeza",
    "cortesia",
    "carino",
    "generosidad",
    "fuerza",
    "positividad",
    "prosperidad",
    "tranquilidad",
    "unidad",
    "entendimiento",
    "honestidad",
    "optimismo",
    "idealismo",
    "alegria",
    "determinacion",
    "humildad",
    "simpatia",
    "reconciliacion",
    "perseverancia",
    "crecimiento",
    "integridad",
    "cordialidad",
    "alegria",
    "curiosidad",
    "amabilidad",
    "positividad",
    "recompensa",
    "abundancia",
    "virtud",
    "logro",
    "contento",
    "desarrollo",
    "entusiasmo",
    "descubrimiento",
    "amor",
    "felicidad",
    "optimismo",
    "liderazgo",
    "esperanza",
    "motivacion",
    "avance",
    "fuerza",
    "positividad",
    "confianza",
]
let palabraSecreta = ""
let letrasAdivinadas = []
let errores = 0
const maxErrores = 12

// Selecciona una palabra aleatoria del vector
function elegirPalabraSecreta() {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length)
    palabraSecreta = palabras[indiceAleatorio]
}

// Muestra la palabra oculta con guiones bajos
function mostrarPalabra() {
    const palabracontenedor = document.getElementById("palabra-contenedor")
    palabracontenedor.innerHTML = palabraSecreta
        .split("")
        .map(letra => (letrasAdivinadas.includes(letra) ? letra : "_"))
        .join(" ")
}

// Actualiza el número de errores
function actualizarErrores() {
    document.getElementById("error").innerText = errores
}

// Revisa si la letra está en la palabra
function manejarLetraIngresada() {
    const letraIngresada = document.getElementById("letra-ingresada").value.toLowerCase()
    if (letraIngresada && palabraSecreta.includes(letraIngresada)) {
        letrasAdivinadas.push(letraIngresada)
    } else {
        errores++
    }
    document.getElementById("letra-ingresada").value = ""
    actualizarErrores()
    mostrarPalabra()
    verificarFinDelJuego()
}

// Verifica si el juego ha terminado
function verificarFinDelJuego() {
    const mensaje = document.getElementById("mensaje")
    if (errores >= maxErrores) {
        mensaje.innerText = `¡Perdiste! La palabra era: ${palabraSecreta}`
        mostrarBotonReiniciar()
    } else if (!document.getElementById("palabra-contenedor").innerText.includes("_")) {
        lanzarConfeti()
        mensaje.innerText = "¡Ganaste!"
        mostrarBotonReiniciar()
    }
}

// Muestra el botón de reinicio
function mostrarBotonReiniciar() {
    document.getElementById("reiniciar").classList.remove("oculto")
}

// Reinicia el juego
function reiniciarJuego() {
    errores = 0
    letrasAdivinadas = []
    document.getElementById("mensaje").innerText = ""
    document.getElementById("reiniciar").classList.add("oculto")
    elegirPalabraSecreta()
    mostrarPalabra()
    actualizarErrores()
}

// Configura el juego al cargar la página
document.getElementById("verificar").addEventListener("click", manejarLetraIngresada)
document.getElementById("reiniciar").addEventListener("click", reiniciarJuego)
elegirPalabraSecreta()
mostrarPalabra()
function lanzarConfeti() {
    confetti({
        particleCount: 100, // Número de partículas
        spread: 70, // Ángulo de expansión del confeti
        origin: { x: 0.5, y: 0.5 }, // Posición desde donde sale el confeti
        colors: ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd"],
    })
}
