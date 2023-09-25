console.log("Test!");
const jsonfile = 'mattias.json';
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
                document.getElementById('customer' + (i +1)).innerHTML = projects[i].customer;
            }
        }


const matt = Vue.createApp({
    data() {
        return{
            projects: [
                {
                    pid: 1,
                    title: 'Raket',
                    customer: 'SAAB',
                    description: 'fill'
                },
                {
                    pid: 2,
                    title: ''
                }
            ],
            message: 'content',
            title: " "
        }
    },

    methods: {
        
    }
});

matt.mount('#matt');

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore";

const descriptionElement = document.getElementById('descriptionTxt');
const descriptionText = text;
const typingSpeed = 50;

let currentIndex = 0;
let aniStarted = false;

function typeDescription() {
    if (currentIndex < descriptionText.length) {
        descriptionElement.innerHTML += descriptionText.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeDescription, typingSpeed);
    }
}

typeDescription();

window = new Window();

function checkAnimation() {
    const elementTop = descriptionElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(elementTop <= windowHeight && !animationStarted){
        typeDescription();
        animationStarted = true;
    }
}