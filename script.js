const burger = document.querySelector('.burger');
const nav    = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');

if (burger && nav && navList) {
    burger.addEventListener('click', function () {
        const expanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('nav--open', !expanded);
    });

    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && nav.classList.contains('nav--open')) {
            nav.classList.remove('nav--open');
            burger.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
            nav.classList.remove('nav--open');
            burger.setAttribute('aria-expanded', 'false');
            burger.focus();
        }
    });
}

// Переключатель отзывов
const dots = document.querySelectorAll('.testimonial__dots .dot');
dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
        dots.forEach(function (d) { d.classList.remove('dot--active'); });
        dot.classList.add('dot--active');
    });
});