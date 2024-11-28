// Asegúrate de que el código se ejecute solo cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.carousel-item'); // Selecciona los items
    var currentIndex = 0; // Índice del elemento actual

    // Función para mostrar el elemento actual
    function showItem(index) {
        for (var i = 0; i < items.length; i++) {
            if (i === index) {
                items[i].classList.add('active'); // Añade la clase 'active'
            } else {
                items[i].classList.remove('active'); // Remueve la clase 'active'
            }
        }
    }

    // Función para pasar al siguiente elemento
    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length; // Incrementa y reinicia al llegar al final
        showItem(currentIndex); // Muestra el elemento actual
    }

    // Configura el intervalo para cambiar automáticamente
    setInterval(nextItem, 3000); // Cambia cada 3 segundos

    // Inicializa mostrando el primer elemento
    showItem(currentIndex);
});
