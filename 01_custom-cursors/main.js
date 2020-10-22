const carousel = document.querySelector(".carousel");
const backwardButton = document.querySelector(".control.backward");
const forwardButton = document.querySelector(".control.forward");

forwardButton.addEventListener("click", () => carousel.scrollBy({ left: 1 }));
backwardButton.addEventListener("click", () => carousel.scrollBy({ left: -1 }));

// JS cursor
if (matchMedia("(pointer:fine)").matches) {
    const cursor = document.querySelector(".cursor");

    const allLinks = document.querySelectorAll("a");

    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        // cursor.classList.add("show");
    });

    allLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => cursor.classList.add("large"));
        link.addEventListener("mouseleave", () => cursor.classList.remove("large"));
    });
}
