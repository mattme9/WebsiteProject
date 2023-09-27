console.log("Test!");

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
            message: 'content' 
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


<<<<<<< Updated upstream
=======
        if(descriptionPosition < screenPosition && !description.hasAttribute("data-typed")){
            description.classList.add("description-animation");
            typingAnimation(description);
            description.setAttribute("data-typed", "true");

            const parentBox = description.closest(".expanding.box");
            if (parentBox){
                parentBox.classList.add("expanded");

                const titleElement = parentBox.querySelector(".title");
                const customerElement = parentBox.querySelector(".customer");

                titleElement.classList.add("fade-in");
                customerElement.classList.add("fade-in");
            }
        }
    })
})

function typingAnimation(element) {
    const text = element.textContent.trim();
    element.textContent = '';

    let index = 0;

    function type(){
        if(index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 20);
        }
    }

    type();
>>>>>>> Stashed changes
}