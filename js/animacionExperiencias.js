document.addEventListener("DOMContentLoaded", function(){

    // Cogemos el elemento experiencias
    const experiencias = document.querySelector(".experiencias");
    // Funcion para detectar experiencias
    function checkExperienciasVisible(){
        // Obtenemos la posición y tamaño de .experiencias respecto a la ventana
        const rect = experiencias.getBoundingClientRect();

        if(rect.top < window.innerHeight && rect.bottom > 0){
            // Si alguna parte de experiencias esta visible en la pantalla, añade la clase show
            experiencias.classList.add("show");
        }else{
            // Si no hay ninguna, la elimina
            experiencias.classList.remove("show");
        }

    }

    // Añadimos la función cada vez que se detecte scroll
    window.addEventListener("scroll", checkExperienciasVisible);

    // Verificamos al cargar la vista si experiencias ya esta visible

    checkExperienciasVisible();
})