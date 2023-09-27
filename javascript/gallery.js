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
