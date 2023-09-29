function mostrarDiv(){
  document.getElementById("mensaje").style.top = "0";
  document.getElementById("mensaje").style.zIndex = "50";
}

window.onload = function() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari y Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // Internet Explorer
    elem.msRequestFullscreen();
  }
};