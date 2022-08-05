var iconMenu = document.querySelector('.menu-burguer');
var desplegar = document.getElementById('desplegar');
iconMenu.addEventListener('click', function() {
  if (iconMenu.classList.contains('open')) {
    iconMenu.classList.remove('open');
    desplegar.classList.remove('desplegar');
  } else {
    iconMenu.classList.add('open');
    desplegar.classList.add('desplegar');
  }
}, false);