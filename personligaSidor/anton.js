// Denna funktion körs när hela webbsidan har laddats
window.onload = function() {
    // Hämta alla element med klassnamnet 'progress-ring__circle'. Dessa element representerar cirkelformade framstegsindikatorer på sidan.
    var circles = document.getElementsByClassName('progress-ring__circle');
    // Definiera en array med procentvärden för varje cirkel. Varje värde representerar hur mycket av cirkeln som ska fyllas.
    var percentages = [50, 45, 75, 60, 80, 75]; // Ändra detta till den procentsats du vill ha för varje cirkel
    // Loopa igenom alla cirkel-element
    for (var i = 0; i < circles.length; i++) {
        // Hämta procentvärdet för den aktuella cirkeln
        var percent = percentages[i];
        // Beräkna offset-värdet baserat på procentvärdet. Offset-värdet används för att bestämma hur mycket av cirkeln som ska vara tom.
        var offset = 365 * (1 - percent / 100);
        // Använd offset-värdet för att uppdatera strokeDashoffset-stilen för cirkeln. StrokeDashoffset är en SVG-egenskap som bestämmer startpunkten för strecket längs cirkelns omkrets.
        circles[i].style.strokeDashoffset = offset;
        // Uppdatera övergången för strokeDashoffset-stilen för cirkeln. Detta skapar en animering där cirkeln fylls över en viss tid.
        circles[i].style.transition = 'stroke-dashoffset ' + (2 * percent / 100) + 's linear';
    }
};


// Lyssna på när hela webbsidan har laddats
window.addEventListener("DOMContentLoaded", () => {
    // Välj alla länkar som börjar med '#'
    const links = document.querySelectorAll('a[href^="#"]');
    // Loopa igenom varje länk
    links.forEach(link => {
        // Lägg till en 'click'-händelse till varje länk
        link.addEventListener('click', function(e) {
            // Förhindra standardbeteendet (som skulle vara att omedelbart hoppa till den angivna div)
            e.preventDefault();
            // Ta bort '#' från href attributet för att få id av målelementet
            let href = this.getAttribute('href').substring(1);
            // Välj målelementet med det id
            let targetElement = document.getElementById(href);
            // Definiera hur mycket marginal du vill ha från toppen i pixlar
            let topOffset = 50;
            // Beräkna positionen för målelementet relativt översta delen av dess närmaste positionerade förälder
            let elementPosition = targetElement.offsetTop;
            // Beräkna den slutliga positionen genom att dra bort din önskade marginal från elementets position
            let offsetPosition = elementPosition - topOffset;

            // Lägg till 'roll' klassen till body för att starta animationen
            document.body.classList.add('roll');

            // Ta bort 'roll' klassen efter animationen är klar
            setTimeout(() => {
                document.body.classList.remove('roll');
            }, 2000); // 2000ms = 2s, tiden för animationen

            // Rulla till den beräknade positionen på ett mjukt sätt
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

// Array med attributnamn
var attributeNames = ["attribute1", "attribute2", "attribute3", "attribute4", "attribute5", "attribute6"];

// Hämta alla circle-element
var circles = document.querySelectorAll(".progress-ring__circle");

// Loopa igenom elementen och sätt attributen
for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var attributeName = attributeNames[i];
    
    // Skapa ett textelement och sätt attributnamnet som text
    var textElement = document.createElement("div");
    textElement.innerText = attributeName;
    
    // Lägg till textelementet i cirkeln
    circle.appendChild(textElement);
}

const jsonfile = 'anton.json';
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
            document.getElementById('customer' + (i + 1)).innerHTML = projects[i].customer;
        }
    }


