const hamburger = document.getElementById('button');
const menuMobile = document.getElementById('menuMobile');

const btEnt = document.getElementById('btEnt');
const overlay3 = document.getElementById('overlay3');
const fechar3 = document.getElementById('fechar3');


function atualizarNav() {
    const isMobile = window.innerWidth <= 900;

    hamburger.style.display = isMobile ? 'flex' : 'none';

    document.querySelector('.nav-links').style.display =
        isMobile ? 'none' : 'flex';

    if (!isMobile) {
        menuMobile.classList.remove('aberto');
        hamburger.classList.remove('aberto');
    }
}


atualizarNav();

window.addEventListener('resize', atualizarNav);


/* Abrir menu hamburger */

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('aberto');
    menuMobile.classList.toggle('aberto');
});


/* Abrir login pelo botão mobile */

btEnt.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    overlay3.classList.add('ativo');
});


/* Fechar login */

fechar3.addEventListener('click', () => {
    overlay3.classList.remove('ativo');
});


/* Fechar menu mobile ao clicar nos links */

menuMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('aberto');
        menuMobile.classList.remove('aberto');
    });
});