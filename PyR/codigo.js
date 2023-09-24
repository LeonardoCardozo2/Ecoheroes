window.onload = function() {
  var elem = document.documentElement;
  
>>>>>>> c44ef4b6180c59cefa9cc8299477201a4511277e
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