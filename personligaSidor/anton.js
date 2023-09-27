window.onload = function () {
   var circles = document.getElementsByClassName("progress-ring__circle");
   var percentages = [50, 45, 75, 60, 80, 75];
   for (var i = 0; i < circles.length; i++) {
      var percent = percentages[i];
      var offset = 365 * (1 - percent / 100);
      circles[i].style.strokeDashoffset = offset;
      circles[i].style.transition =
         "stroke-dashoffset " + (2 * percent) / 100 + "s linear";
   }
};

window.addEventListener("DOMContentLoaded", () => {
   const links = document.querySelectorAll('a[href^="#"]');
   links.forEach((link) => {
      link.addEventListener("click", function (e) {
         e.preventDefault();
         let href = this.getAttribute("href").substring(1);
         let targetElement = document.getElementById(href);
         let topOffset = 50;
         let elementPosition = targetElement.offsetTop;
         let offsetPosition = elementPosition - topOffset;

         document.body.classList.add("roll");

         setTimeout(() => {
            document.body.classList.remove("roll");
         }, 2000);

         window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
         });
      });
   });
});

var attributeNames = [
   "attribute1",
   "attribute2",
   "attribute3",
   "attribute4",
   "attribute5",
   "attribute6",
];

var circles = document.querySelectorAll(".progress-ring__circle");

for (var i = 0; i < circles.length; i++) {
   var circle = circles[i];
   var attributeName = attributeNames[i];

   var textElement = document.createElement("div");
   textElement.innerText = attributeName;

   circle.appendChild(textElement);
}

const jsonfile = "anton.json";
var projects = [];

fetch(jsonfile)
   .then((response) => {
      if (!response.ok) {
         throw new Error("JSON could not be loaded.");
      }
      return response.json();
   })
   .then((data) => {
      console.log(data);
      data.forEach((item) => {
         console.log(`Name: ${item.title}`);
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
      document.getElementById("customer" + (i + 1)).innerHTML =
         projects[i].customer;
   }
}
