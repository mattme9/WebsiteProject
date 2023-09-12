let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    console.log('lmao');
  } else {
    document.getElementById("header").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}