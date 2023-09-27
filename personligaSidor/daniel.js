const jsonfile = 'daniel.json';
var projects = [];

fetch(jsonfile)
    .then(response => {
        if (!response.ok) {
            throw new Error("JSON could not be loaded.");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(item => {
            console.log(`Name: ${item.title}`);
            projects.push(item);
        });
        fillTitles();
    })
    .catch(error => {
        console.error('Error', error);
    });

    function fillTitles(){
        for (let i = 0; i < projects.length; i++) {
            document.getElementById('title' + (i + 1)).innerHTML = projects[i].title;
            document.getElementById('description' + (i + 1)).innerHTML = projects[i].description;
        }
    }
document.addEventListener("DOMContentLoaded", function () {

    // Hantera färdighetssektionen
    let skills = document.querySelectorAll(".skill progress");
 
    // Loopa igenom varje färdighetsmätare
    skills.forEach(function (skill) {
       // Hämta färdighetsvärdet och maxvärdet för varje mätare
       let value = skill.getAttribute("value");
       let max = skill.getAttribute("max");
       let progress = 0; // En variabel för att hålla reda på nuvarande framsteg
       let duration = (value / max) * 1000; // Används 2 sekunders duration som exempel (justera vid behov)
       let increment = value / (duration / 10); // Räknar upp med 10 steg per sekund
 
       // Hitta den tillhörande texten för att visa framstegsprocenten
       let progressText = skill.parentElement.querySelector(".progress-text");
 
       // Skapa ett interval som uppdaterar framsteg och text
       let interval = setInterval(function () {
          // Om framsteg inte har nått målet ännu
          if (progress < value) {
             progress += increment; // Öka framsteg med inkrementet
             skill.value = progress; // Uppdatera färdighetsmätarens värde
             progressText.innerText = Math.round(progress) + "%"; // Uppdatera texten med avrundat värde
          } else {
             clearInterval(interval); // Stoppa intervallet när målet är nått
             progressText.innerText = value + "%"; // Sätt texten till slutgiltig procentandel
          }
       }, 10); // Uppdatera var 10 ms (10 st eg per sekund)
    });
 
    // Hantera projektsektionen
    let projectContainers = document.querySelectorAll('.project-container');
 
    // Funktion för att kolla synlighet av projektcontainrar när sidan scrollas
    function checkVisibility() {
     projectContainers.forEach(function(container) {
         let bounding = container.getBoundingClientRect();
 
         // Beroende på skärmstorlek, använd olika aktiveringszoner
         let activationZone = 200; // Standardaktiveringszon
 
         if (window.innerWidth <= 768) {
             // För skärmar mindre än eller lika med 768px bredd
             activationZone = 100; // Använd en mindre aktiveringszon
         }
 
         if (bounding.top >= 0 && bounding.bottom <= window.innerHeight + activationZone) {
             container.classList.add('show'); // Lägg till klassen "show" om projektet är synligt (+ aktiveringszon)
         } else {
             container.classList.remove('show'); // Ta bort klassen "show" om projektet inte är synligt
         }
     });
 }
 
 
    // Lyssna efter scrollhändelser och anropa checkVisibility
    window.addEventListener('scroll', checkVisibility);
 
    // Lyssna efter ändringar i fönstrets storlek och anropa checkVisibility
    window.addEventListener('resize', checkVisibility);
 
    checkVisibility(); // Kolla synlighet när sidan laddas
 });
 