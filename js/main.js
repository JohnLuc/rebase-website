// dark mode toggle

const toggle = document.getElementById("darkToggle")

toggle.addEventListener("click", () => {

    document.documentElement.classList.toggle("dark")

    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light")
    }

})

if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark")
}


document.addEventListener('DOMContentLoaded', function () {
    // Select all the accordion buttons
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach((button) => {
        button.addEventListener('click', function () {
            // Select the content for the clicked button
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');

            // Close all other accordion sections
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

            // Toggle the visibility of the clicked content
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180'); // Rotate the icon on click
        });
    });
});
