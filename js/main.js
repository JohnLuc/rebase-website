const toggle = document.getElementById("darkToggle")
const logo = document.getElementById("logo")

toggle.addEventListener("click", () => {

    document.documentElement.classList.toggle("dark")

    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark")
        logo.src = "images/logo-dark.png"
    } else {
        localStorage.setItem("theme", "light")
        logo.src = "images/logo-light.png"
    }
})

if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark")
    logo.src = "images/logo-dark.png"
}

// Our-Process accordion
document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');

            const allContents = document.querySelectorAll('.accordion-content');
            allContents.forEach((otherContent) => {
                if (otherContent !== content) {
                    otherContent.classList.add('hidden');
                    const otherIcon = otherContent.previousElementSibling.querySelector('svg');
                    if (otherIcon) {
                        otherIcon.classList.remove('rotate-180');
                    }
                }
            });

            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });
});
