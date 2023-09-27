// Först, få referenser till alla dina "innerFlexBox"-divar och knappar
var innerFlexBoxes = [
   document.querySelector(".innerFlexBoxStart"),
   document.querySelector(".innerFlexBoxChassi"),
   document.querySelector(".innerFlexBoxProcessor"),
   document.querySelector(".innerFlexBoxGPU"),
   document.querySelector(".innerFlexBoxMotherboard"),
   document.querySelector(".innerFlexBoxRAM"),
   document.querySelector(".innerFlexBoxHarddrive"),
   document.querySelector(".innerFlexBoxFans"),
   document.querySelector(".innerFlexBoxCooling"),
   document.querySelector(".innerFlexBoxPSU"),
   document.querySelector(".innerFlexBoxOS"),
   document.querySelector(".innerFlexBoxProvideBuild"),
];

var buttons = [
   document.querySelector("#startButton"),
   document.querySelector("#chassiButton"),
   document.querySelector("#processorButton"),
   document.querySelector("#gpuButton"),
   document.querySelector("#motherboardButton"),
   document.querySelector("#ramButton"),
   document.querySelector("#harddriveButton"),
   document.querySelector("#fansButton"),
   document.querySelector("#coolingButton"),
   document.querySelector("#psuButton"),
   document.querySelector("#osButton"),
   document.querySelector("#mountButton"),
];

// Lägg till en "click"-händelsehanterare till varje knapp
buttons.forEach(function (button, index) {
   button.addEventListener("click", function () {
      // När en knapp klickas, göm alla "innerFlexBox"-divar
      innerFlexBoxes.forEach(function (box) {
         box.style.display = "none";
      });

      // Och visa den relevanta "innerFlexBox"-diven baserat på knappens index
      innerFlexBoxes[index].style.display = "block";
   });
});

window.onload = function () {
   // När sidan laddas, göm alla "innerFlexBox"-divar
   innerFlexBoxes.forEach(function (box) {
      box.style.display = "none";
   });

   // Visa den första "innerFlexBox"-diven
   innerFlexBoxes[0].style.display = "block";

   // Hitta elementet med klassen 'innerFlexBoxProvideBuild'
   var provideBuild = document.querySelector(".innerFlexBoxProvideBuild");
   // Hitta elementet med klassen 'disclaimer'
   var disclaimer = document.querySelector(".disclaimer");

   // Kontrollera om 'innerFlexBoxProvideBuild' visas när sidan laddas
   if (
      provideBuild.style.display === "none" ||
      provideBuild.style.display === ""
   ) {
      // Om 'innerFlexBoxProvideBuild' inte visas, dölj 'disclaimer'
      disclaimer.style.display = "none";
   } else {
      // Om 'innerFlexBoxProvideBuild' visas, visa 'disclaimer'
      disclaimer.style.display = "block";
   }

   // Skapa en ny MutationObserver som kommer att kallas när attributen för 'innerFlexBoxProvideBuild' ändras
   var observer = new MutationObserver(function (mutations) {
      // Loopa igenom alla mutationer
      mutations.forEach(function (mutation) {
         // Kontrollera om attributet som ändrades är 'style'
         if (mutation.attributeName === "style") {
            // Kontrollera om 'innerFlexBoxProvideBuild' visas efter ändringen
            if (window.getComputedStyle(provideBuild).display !== "none") {
               // Om 'innerFlexBoxProvideBuild' visas, visa 'disclaimer'
               disclaimer.style.display = "block";
            } else {
               // Om 'innerFlexBoxProvideBuild' inte visas, dölj 'disclaimer'
               disclaimer.style.display = "none";
            }
         }
      });
   });

   // Börja observera ändringar i attributen för 'innerFlexBoxProvideBuild'
   observer.observe(provideBuild, { attributes: true });
};
