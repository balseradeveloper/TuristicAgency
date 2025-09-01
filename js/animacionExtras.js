document.addEventListener("DOMContentLoaded", function () {

    // Selecciono los tres extras

    const gastronomia = document.querySelector(".gastronomia");
    const fiestas = document.querySelector(".fiestas");
    const hoteles = document.querySelector(".hoteles");

    // Cojo la tarjeta general

    const extras = document.getElementById("extras");

    // Creo la función para detectar las tarjetas

    function checkTarjetas() {
        // Obtenemos la posición de las tarjetas
        const rect = extras.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Si los extras son visibles, se añade la clase show
            gastronomia.classList.add("show");
            fiestas.classList.add("show");
            hoteles.classList.add("show");
        } else {
            // Si los extras no son visibles, se elimina la clase show
            gastronomia.classList.remove("show");
            fiestas.classList.remove("show");
            hoteles.classList.remove("show");
        }
    }

    // Añadimos la función cada vez que se detecte scroll

    window.addEventListener("scroll", checkTarjetas);

    // Llamo a la función cuando se carga el DOM
    checkTarjetas();
});