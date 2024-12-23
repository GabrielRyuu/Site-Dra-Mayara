const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
// Quando o botão de menu for clicado
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.caixa').classList.toggle('active');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.avaliacao-img');

function showSlide(index) {
    // Garantir que o índice está dentro dos limites
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Esconder todas as imagens
    slides.forEach(slide => slide.style.display = 'none');

    // Mostrar a imagem atual
    slides[currentSlide].style.display = 'block';
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Exibe o primeiro slide ao carregar a página
showSlide(currentSlide);
