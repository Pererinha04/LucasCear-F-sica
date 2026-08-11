const button = document.getElementById('button');
const menuMobile = document.getElementById('menuMobile');

const btEnt = document.getElementById('btEnt');
const overlay3 = document.getElementById('overlay3');
const fechar3 = document.getElementById('fechar3');


function atualizarNav() {
    const isMobile = window.innerWidth <= 900;

    button.style.display = isMobile ? 'flex' : 'none';

    document.querySelector('.nav-links').style.display =
        isMobile ? 'none' : 'flex';

    if (!isMobile) {
        menuMobile.classList.remove('aberto');
        button.classList.remove('aberto');
    }
}


atualizarNav();

window.addEventListener('resize', atualizarNav);


/* Abrir menu mobile */

button.addEventListener('click', () => {
    button.classList.toggle('aberto');
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
        button.classList.remove('aberto');
        menuMobile.classList.remove('aberto');
    });
});