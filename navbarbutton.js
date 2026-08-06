  const hamburger = document.getElementById('button');
  const menuMobile = document.getElementById('menuMobile');

   function atualizarNav() {
    const isMobile = window.innerWidth <= 900;
    hamburger.style.display = isMobile ? 'flex' : 'none';
    document.querySelector('.nav-links').style.display = isMobile ? 'none' : 'flex';
    if (!isMobile) {
      menuMobile.classList.remove('aberto');
      hamburger.classList.remove('aberto');
    }
  }

  atualizarNav();
  window.addEventListener('resize', atualizarNav);
 
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('aberto');
    menuMobile.classList.toggle('aberto');
  });

  menuMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('aberto');
      menuMobile.classList.remove('aberto');
    });
  });

  