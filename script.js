const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', function() {
   menuBtn.classList.toggle('is-active');
   mobileMenu.classList.toggle('is-active');
});

let sIndex = 1;
showSlides(sIndex);

function plusSlides(n) {
    showSlides(sIndex += n);
}

function currentSlide(n) {
    showSlides(sIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {sIndex = 1}
    if (n < 1) {
        sIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[sIndex-1].style.display = "block";
    dots[sIndex-1].className += " active";
}

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

// Hämta e-post och telefonnummer fält
var emailField = document.getElementById("email");
var phoneField = document.getElementById("phone");

// Lägg till en lyssnare för input-händelsen på e-postfältet
emailField.addEventListener('input', function (event) {
   // Validera e-postadressen i realtid
   var emailRegex = /^[a-z][\w.-]*@[a-z][\w.-]*\.[a-z][a-z]*$/i;
   if (!emailRegex.test(emailField.value)) {
      // Om e-postadressen inte är giltig, visa ett felmeddelande
      emailField.setCustomValidity('Ange en giltig e-postadress.');
      emailField.reportValidity();
   } else {
      // Om e-postadressen är giltig, rensa eventuella felmeddelanden
      emailField.setCustomValidity('');
   }
});

// Lägg till en lyssnare för input-händelsen på telefonfältet
phoneField.addEventListener('input', function (event) {
   // Validera telefonnumret i realtid
   var phoneRegex = /^\d{10}$/;
   if (!phoneRegex.test(phoneField.value)) {
      // Om telefonnumret inte är giltigt, visa ett felmeddelande
      phoneField.setCustomValidity('Ange ett giltigt telefonnummer med 10 siffror.');
      phoneField.reportValidity();
   } else {
      // Om telefonnumret är giltigt, rensa eventuella felmeddelanden
      phoneField.setCustomValidity('');
   }
});

// Lägg till en lyssnare för submit-händelsen på formuläret
form.addEventListener('submit', function (event) {
   // Om formuläret inte är giltigt, förhindra att det skickas
   if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
   }

   form.classList.add('was-validated');
});

