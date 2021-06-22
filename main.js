document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

//llamamos a las clases htm para darle efecto con ScrollReveal
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cars', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });