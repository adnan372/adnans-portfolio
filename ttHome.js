const hamburger = document.querySelector('.hamburger');
const popup = document.querySelector('.popup');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    popup.classList.toggle('is-active');
});