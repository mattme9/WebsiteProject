console.log("lol");

// Hämta modalen
var popup = document.getElementById("myPopup");

// Hämta knappen som öppnar modalen
var btn = document.getElementById("contactForm");

// Hämta <span>-elementet som stänger modalen
var span = document.getElementsByClassName("close")[0];

// När användaren klickar på knappen, öppna modalen
btn.onclick = function () {
   popup.style.display = "block";
};

// När användaren klickar på <span> (x), stäng modalen
span.onclick = function () {
   popup.style.display = "none";
};

// När användaren klickar var som helst utanför modalen, stäng den
window.onclick = function (event) {
   if (event.target == popup) {
      popup.style.display = "none";
   }
};
