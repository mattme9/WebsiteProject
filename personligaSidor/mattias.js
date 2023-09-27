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
            document.getElementById('customer' + (i + 1)).innerHTML = projects[i].customer;
            document.getElementById('desc' + (i + 1)).innerHTML = projects[i].description;
        }
    }

document.addEventListener("scroll", function() {
    const descriptions = document.querySelectorAll(".description");
    descriptions.forEach(function (description) {
        const descriptionPosition = description.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if(descriptionPosition < screenPosition && !description.hasAttribute("data-typed")){
            description.classList.add("description-animation");
            typingAnimation(description);
            description.setAttribute("data-typed", "true");

            const parentBox = description.closest(".expanding.box");
            if (parentBox){
                parentBox.classList.add("expanded");

                const titleElement = parentBox.querySelector(".title");
                const customerElement = parentBox.querySelector(".customer");
                
                // Add a class to trigger the fade-in effect
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
}