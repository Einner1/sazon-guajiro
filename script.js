// Datos de cada diapositiva (incluyendo el enlace para el botón)
const slidesData = [
    { title: "¡Dulce de Papaya!", subtitle: "Una delicia tradicional", buttonLink: "dulce.html" },
    { title: "Arroz con Camarón", subtitle: "Perfecto para el almuerzo", buttonLink: "arroz de camarones.html" },
    { title: "Panelitas", subtitle: "Un toque dulce y sabroso", buttonLink: "panelitas.html" },
    { title: "Friche de Chivo", subtitle: "Friche preparado a la perfección", buttonLink: "friche.html" },
    { title: "Sancocho", subtitle: "Un clásico de la comida colombiana", buttonLink: "sancocho.html" }
];

const captionTitle = document.querySelector('.banner-title');
const captionSubtitle = document.querySelector('.banner-subtitle');
const bannerButton = document.querySelector('.banner-button');

const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;
const intervalTime = 3000; // Tiempo en milisegundos (3 segundos)
let autoSlideInterval;

// Muestra la diapositiva correspondiente
function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    carouselContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    
    // Actualiza los textos de la etiqueta y el botón
    captionTitle.textContent = slidesData[index].title;
    captionSubtitle.textContent = slidesData[index].subtitle;
    bannerButton.textContent = "Ver Receta"; // Cambiar el texto del botón si lo deseas
    bannerButton.onclick = function() {
        // Navegar al enlace correspondiente de esta diapositiva
        window.location.href = slidesData[index].buttonLink;
    };
}

// Función para avanzar a la siguiente diapositiva
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Función para retroceder a la diapositiva anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Agregar eventos a los botones
nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide(); // Reinicia el temporizador al interactuar manualmente
});

prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide(); // Reinicia el temporizador al interactuar manualmente
});

// Inicia el carrusel automático
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, intervalTime);
}

// Detiene el carrusel automático
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Reinicia el temporizador cuando el usuario interactúa
function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

// Iniciar el carrusel automáticamente al cargar la página
startAutoSlide();



const items = document.querySelectorAll('.curiosity-carousel-item');


// Función para mostrar el elemento actual
function showItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

// Cambia al siguiente elemento automáticamente
function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}

// Configura el intervalo para el movimiento automático
setInterval(nextItem, 3000); // Cambia cada 3 segundos

// Inicializa mostrando el primer elemento
showItem(currentIndex);
