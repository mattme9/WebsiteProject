function animateSkillBar(containerSelector, endValue, speed) {
    const skillbarLevel = document.querySelector(`${containerSelector} .skillbar-circle`);
    const skillbarValue = document.querySelector(`${containerSelector} .circle-value`);
 
    let startValue = 0;
 
    const level = setInterval(function () {
        startValue++;
        skillbarValue.textContent = startValue + '%';
        skillbarLevel.style.background = `conic-gradient(#894E9A ${startValue * 3.6}deg, #ededed 0deg)`;
 
        if (startValue === endValue) {
            clearInterval(level);
        }
    }, speed);
 }
 
 animateSkillBar('#skillbar-1', 75, 30); 
 animateSkillBar('#skillbar-2', 90, 30); 
 animateSkillBar('#skillbar-3', 60, 30); 
 
 