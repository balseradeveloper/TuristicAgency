// Selecciona el contenedor del grid de destinos, los puntos del slider y las tarjetas de destino
const grid = document.querySelector(".destinos-grid");
const dots = document.querySelectorAll(".slider-dots .dot");
const cards = document.querySelectorAll(".destino-card");



// Escucha el evento de scroll en el grid de destinos
grid.addEventListener('scroll', () => {
    // Obtiene la posición horizontal del scroll
    const scrollLeft = grid.scrollLeft;
    // Obtiene el ancho de la primera tarjeta
    const cardWidth = cards[0].offsetWidth;
    // Calcula el índice de la tarjeta actualmente visible
    const index = Math.round(scrollLeft / cardWidth);

    // Actualiza la clase 'active' en los puntos del slider según la tarjeta visible
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });


});

// Asigna el evento de click a cada punto para hacerlos navegables
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        grid.scrollTo({
            left: cards[i].offsetLeft,
            behavior: 'smooth'
        });
    });
});


// Selecciona el contenedor del grid de experiencias, los puntos del slider y las tarjetas de experiencia
const grid2 = document.querySelector(".experiencias-grid");
const dots2 = document.querySelectorAll(".slider-dots-experience .dot-experience");
const cards2 = document.querySelectorAll(".experiencia-card");

// Drag-to-scroll para experiencias-grid
let isDown = false;
let startX;
let scrollLeft;
grid2.addEventListener('mousedown', (e) => {
    isDown = true;
    grid2.classList.add('dragging');
    startX = e.pageX - grid2.offsetLeft;
    scrollLeft = grid2.scrollLeft;
});
grid2.addEventListener('mouseleave', () => {
    isDown = false;
    grid2.classList.remove('dragging');
});
grid2.addEventListener('mouseup', () => {
    isDown = false;
    grid2.classList.remove('dragging');
});
grid2.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - grid2.offsetLeft;
    const walk = (x - startX) * 1.5; // velocidad de arrastre
    grid2.scrollLeft = scrollLeft - walk;
});

// Escucha el evento de scroll en el grid de experiencias
grid2.addEventListener('scroll', () => {
    // Obtiene la posición horizontal del scroll
    const scrollLeft = grid2.scrollLeft;
    // Obtiene el ancho de la primera tarjeta
    const cardWidth = cards2[0].offsetWidth;
    // Calcula el índice de la tarjeta actualmente visible
    const index = Math.round(scrollLeft / cardWidth);

    // Actualiza la clase 'active' en los puntos del slider según la tarjeta visible
    dots2.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
        const distance = Math.abs(i - index);
        dot.style.transform = `scale(${Math.max(0.7, 1 - 0.15 * distance)})`;
    });
});

// Asigna el evento de click a cada punto para hacerlos navegables
dots2.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        grid2.scrollTo({
            left: cards2[i].offsetLeft,
            behavior: 'smooth'
        });
    });
});
