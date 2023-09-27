const jsonfile = "daniel.json";
var projects = [];

fetch(jsonfile)
   .then((response) => {
      if (!response.ok) {
         throw new Error("JSON could not be loaded.");
      }
      return response.json();
   })
   .then((data) => {
      data.forEach((item) => {
         projects.push(item);
      });
      fillTitles();
   })
   .catch((error) => {
      console.error("Error", error);
   });

function fillTitles() {
   for (let i = 0; i < projects.length; i++) {
      document.getElementById("title" + (i + 1)).innerHTML = projects[i].title;
      document.getElementById("description" + (i + 1)).innerHTML =
         projects[i].description;
   }
}

document.addEventListener("DOMContentLoaded", function () {
   let skills = document.querySelectorAll(".skill progress");

   skills.forEach(function (skill) {
      let value = skill.getAttribute("value");
      let max = skill.getAttribute("max");
      let progress = 0;
      let duration = (value / max) * 1000;
      let increment = value / (duration / 10);
      let progressText = skill.parentElement.querySelector(".progress-text");

      let interval = setInterval(function () {
         if (progress < value) {
            progress += increment;
            skill.value = progress;
            progressText.innerText = Math.round(progress) + "%";
         } else {
            clearInterval(interval);
            progressText.innerText = value + "%";
         }
      }, 10);
   });

   let projectContainers = document.querySelectorAll(".project-container");

   function checkVisibility() {
      projectContainers.forEach(function (container) {
         let bounding = container.getBoundingClientRect();

         let activationZone = 200;

         if (window.innerWidth <= 768) {
            activationZone = 100;
         }

         if (
            bounding.top >= 0 &&
            bounding.bottom <= window.innerHeight + activationZone
         ) {
            container.classList.add("show");
         } else {
            container.classList.remove("show");
         }
      });
   }

   window.addEventListener("scroll", checkVisibility);
   window.addEventListener("resize", checkVisibility);

   checkVisibility();
});
