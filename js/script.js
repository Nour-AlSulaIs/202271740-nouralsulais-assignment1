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

typeWriter();


const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "Light";
    } else {
        toggleBtn.textContent = "Dark";
    }
});

