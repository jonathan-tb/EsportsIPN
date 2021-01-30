document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.newcards',{delay: 500});
ScrollReveal().reveal('.cards-banner-one',{delay: 500});
ScrollReveal().reveal('.cards-banner-two',{delay: 500});
