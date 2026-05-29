const roles = [
"QA Automation Engineer",
"Python Developer",
"Future SDET",
"AI Enthusiast",
"Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {
const element = document.getElementById("typing");

if (!element) return;

const currentRole = roles[roleIndex];

if (!deleting) {
    element.textContent =
        currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
        deleting = true;
        setTimeout(typeWriter, 1500);
        return;
    }
} else {
    element.textContent =
        currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
}

setTimeout(typeWriter, deleting ? 50 : 100);

}

document.addEventListener("DOMContentLoaded", () => {

typeWriter();

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card").forEach(card => {
    observer.observe(card);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

    });

});

});

window.addEventListener("scroll", () => {

const nav = document.querySelector("nav");

if (window.scrollY > 50) {
    nav.classList.add("nav-scroll");
} else {
    nav.classList.remove("nav-scroll");
}

});
