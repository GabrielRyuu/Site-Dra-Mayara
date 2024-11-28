let currentIndex = 0;

const images = document.querySelectorAll('.slider-images img');
const totalImages = images.length;

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function updateSlider() {
    const newTransformValue = -(currentIndex * 100); // Move o slider para a posição da imagem
    document.querySelector('.slider-images').style.transform = `translateX(${newTransformValue}%)`;
}

nextButton.addEventListener('click', function() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Voltar para a primeira imagem
    }
    updateSlider();
});

prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1; // Voltar para a última imagem
    }
    updateSlider();
});
