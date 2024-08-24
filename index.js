let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

for (let i = 1; i <= 12; i++) {
    document.querySelectorAll(`.featured-image-${i}`).forEach(image => {
        image.addEventListener('click', () => {
            let src = image.getAttribute('src');
            document.querySelector(`.big-image-${i}`).src = src;
        });
    });
}