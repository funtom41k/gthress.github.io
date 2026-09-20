// let track = document.querySelector('#slider ul');
// let sliders = document.querySelectorAll('#slider ul li');
// let prevBtn = document.querySelector('.arrow_left');
// let nextBtn = document.querySelector('.arrow_right');

// let index = 0;
// const totalSlides = sliders.length;
// const slideWidth = 472;

const track = document.querySelector("#slider ul");
const sliders = document.querySelectorAll("#slider ul li");
const prevBtn = document.querySelector(".arrow_left");
const nextBtn = document.querySelector(".arrow_right");

let index = 0;
const totalSlides = sliders.length;

// Функция обновления позиции ленты
function updateSlider() {
    // Берём фактическую ширину слайда из DOM (или 200px по умолчанию)
    const slideWidth = sliders[0]?.offsetWidth || 200;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Листаем вперед
nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    index++;
    if (index >= totalSlides) {
        index = 0; // Зацикливание в начало
    }
    updateSlider();
});

// Листаем назад
prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    index--;
    if (index < 0) {
        index = totalSlides - 1; // Зацикливание в конец
    }
    updateSlider();
});
