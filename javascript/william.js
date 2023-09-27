//Fyller i mina skillbars när sidan laddas
function animateSkillBar(containerSelector, endValue, speed) {
    const skillbarLevel = document.querySelector(`${containerSelector} .skillbar-circle`);
    const skillbarValue = document.querySelector(`${containerSelector} .circle-value`);
 
    let startValue = 0;
 
    const level = setInterval(function () {
        startValue++;
        skillbarValue.textContent = startValue + '%';
        skillbarLevel.style.background = `conic-gradient(#493C9F, #7865CE, #A890FE, #111772 ${startValue * 3.6}deg, #ededed 0deg)`;
 
        if (startValue === endValue) {
            clearInterval(level);
        }
    }, speed);
}

//Fyra metodanrop för fyra skillbars
animateSkillBar('#skillbar-1', 77, 30); 
animateSkillBar('#skillbar-2', 89, 30); 
animateSkillBar('#skillbar-3', 64, 30); 
animateSkillBar('#skillbar-4', 82, 30);

//Laddar in mitt material från vänster till höger 
//när sidan uppdateras eller så fort materialet syns på sidan.
//Transition sker därför när man scrollar.
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {            
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//Fetchar data från min JSON-fil och anropar en metod
//som fyller i titel, kund och beskrivning. 
const jsonfile = 'william.json';
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
            projects.push(item);
        });
        fillTitles();
    })
    .catch(error => {
        console.error('Error', error);
    });

    function fillTitles(){
        for (let i = 0; i < projects.length; i++) {
            document.querySelector('.title' + (i + 1)).textContent = projects[i].title;
            document.querySelector('.customer' + (i + 1)).textContent = projects[i].customer;
            document.querySelector('.description' + (i + 1)).textContent = projects[i].description;
        }
    }