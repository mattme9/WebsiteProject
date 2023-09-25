// Denna funktion körs när hela webbsidan har laddats
window.onload = function() {
    // Hämta alla element med klassnamnet 'progress-ring__circle'. Dessa element representerar cirkelformade framstegsindikatorer på sidan.
    var circles = document.getElementsByClassName('progress-ring__circle');
    // Definiera en array med procentvärden för varje cirkel. Varje värde representerar hur mycket av cirkeln som ska fyllas.
    var percentages = [50, 45, 75, 60, 80]; // Ändra detta till den procentsats du vill ha för varje cirkel
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