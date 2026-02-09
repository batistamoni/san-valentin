// --- VARIABLES ---
// Seleccionamos los elementos del HTML
const btnSi = document.getElementById("btn-si");
const btnNo = document.getElementById("btn-no");
const divInicio = document.getElementById("inicio"); // Pantalla inicial
const divRespuesta = document.getElementById("respuesta"); // Pantalla final

// --- LÓGICA DEL BOTÓN "NO" ---
// Cuando el ratón pasa por encima del botón "NO"
btnNo.addEventListener("mouseover", function() {
    // 1. Usamos fixed para que se mueva libremente respecto a la pantalla, no a la tarjeta
    btnNo.style.position = "fixed";

    // 2. Calculamos el espacio disponible
    // Restamos el tamaño del botón y un margen extra (20px) para que no se salga   
    const anchoVentana = Math.random() * (window.innerWidth - btnNo.offsetWidth) - 20;
    const altoVentana = Math.random() * (window.innerHeight - btnNo.offsetHeight) - 20;

    // 3. Generamos las coordenadas aleatorias dentro de esos límites
    const randomX = Math.random() * anchoVentana;
    const randomY = Math.random() * altoVentana;

    // 4. Aplicamos las nuevas coordenadas
    // Math.max(10, ...) asegura que no se pegue demasiado al borde superior/izquierdo
    btnNo.style.left = Math.max(10, randomX) + "px";
    btnNo.style.top = Math.max(10, randomY) + "px";

    // Aseguramos que el botón quede por encima de todo
    btnNo.style.zIndex = "100";
});

// --- LÓGICA DEL BOTÓN "SÍ" ---
// Escuchamos el evento "click"
btnSi.addEventListener("click", function() {
    // 1. Ocultamos la pregunta
    divInicio.style.display = "none";

    // 2. Mostramos la respuesta
    divRespuesta.style.display = "block";
});
