window.addEventListener('load', () =>{
    const contenedor_loader = document.querySelector('section div')
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
});

window.onload = function() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // Internet Explorer
    elem.msRequestFullscreen();
  }
};