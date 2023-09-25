document.addEventListener("DOMContentLoaded", function () {
   var skills = document.querySelectorAll(".skill progress");

   skills.forEach(function (skill) {
      var value = skill.getAttribute("value");
      var max = skill.getAttribute("max");
      var progress = 0;
      var duration = (value / max) * 1000; // Används 2 sekunders duration som exempel (justera vid behov)
      var increment = value / (duration / 10); // Räknar upp med 10 steg per sekund

      var progressText = skill.parentElement.querySelector(".progress-text");

      var interval = setInterval(function () {
         if (progress < value) {
            progress += increment;
            skill.value = progress;
            progressText.innerText = Math.round(progress) + "%";
         } else {
            clearInterval(interval);
            progressText.innerText = value + "%";
         }
      }, 10); // Uppdatera var 10 ms (10 steg per sekund)
   });
});

