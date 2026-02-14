/* Typing Animation Logic
   Displays the subtitle with a typewriter effect */

const text = " A Software Engineer";
let index = 0;
const speed = 100;

const typingElement = document.querySelector(".typing");

function typeWriter() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

/* Start typing animation */
typeWriter();



/* Dark / Light Mode Toggle
   Toggles a CSS class on the body element */

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    /* Toggle theme class */
    document.body.classList.toggle("light-mode");

    /* Update button label */
    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "Light";
    } else {
        toggleBtn.textContent = "Dark";
    }
});


