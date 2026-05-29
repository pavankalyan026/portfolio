// ===============================
// PORTFOLIO SCRIPT
// Pavankalyan Koneti
// ===============================

// Typing Animation

const roles = [
    "Electrical Admin Engineer",
    "QA Automation Engineer",
    "Python Developer",
    "NexgenOps Creator",
    "Future SDET",
    "Automation Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const typingElement =
        document.getElementById("typing");

    if (!typingElement) return;

    const currentRole =
        roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex =
                (roleIndex + 1) %
                roles.length;
        }

    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

// ===============================
// Smooth Scroll
// ===============================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});

// ===============================
// Navbar Scroll Effect
// ===============================

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector("nav");

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(10,10,20,0.95)";

            navbar.style.backdropFilter =
                "blur(10px)";

        } else {

            navbar.style.background =
                "transparent";

        }

    }
);

// ===============================
// Reveal Animation
// ===============================

const observer =
new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (
                entry.isIntersecting
            ) {

                entry.target.classList.add(
                    "show"
                );

            }

        });

    },

    {
        threshold: 0.2
    }

);

document
.querySelectorAll(
    ".card,.skill,.timeline-item"
)
.forEach(el => {

    observer.observe(el);

});

// ===============================
// Skills Animation
// ===============================

function animateSkills() {

    const skills =
        document.querySelectorAll(
            ".progress-bar"
        );

    skills.forEach(skill => {

        const value =
            skill.getAttribute(
                "data-width"
            );

        skill.style.width = value;

    });

}

const skillsSection =
document.querySelector("#skills");

if (skillsSection) {

    const skillsObserver =
    new IntersectionObserver(

        entries => {

            if (
                entries[0].isIntersecting
            ) {

                animateSkills();

            }

        }

    );

    skillsObserver.observe(
        skillsSection
    );

}

// ===============================
// Stats Counter
// ===============================

const counters =
document.querySelectorAll(
    ".counter"
);

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
            +counter.getAttribute(
                "data-target"
            );

        const current =
            +counter.innerText;

        const increment =
            target / 100;

        if (current < target) {

            counter.innerText =
                Math.ceil(
                    current + increment
                );

            setTimeout(
                updateCounter,
                20
            );

        } else {

            counter.innerText =
                target;

        }

    };

    updateCounter();

});

// ===============================
// Scroll To Top Button
// ===============================

const scrollBtn =
document.getElementById(
    "scrollTop"
);

if (scrollBtn) {

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 500
            ) {

                scrollBtn.style.display =
                    "block";

            } else {

                scrollBtn.style.display =
                    "none";

            }

        }
    );

    scrollBtn.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}

// ===============================
// Page Loaded
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "Portfolio Loaded Successfully"
        );

        typeEffect();

    }
);
