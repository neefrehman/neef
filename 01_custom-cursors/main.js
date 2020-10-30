const carousel = document.querySelector(".carousel");
const backwardButton = document.querySelector(".control.backward");
const forwardButton = document.querySelector(".control.forward");

const imageWidth = carousel.querySelector("img").clientWidth + 5;

forwardButton.addEventListener("click", () =>
    carousel.scrollBy({ left: imageWidth })
);
backwardButton.addEventListener("click", () =>
    carousel.scrollBy({ left: imageWidth * -1 })
);

// JS cursor
if (matchMedia("(pointer:fine)").matches) {
    const cursor = document.querySelector(".cursor");

    const allLinks = document.querySelectorAll("a");

    const getMean = (array) =>
        array.reduce((acc, cur) => acc + cur, 0) / array.length;
    let previousMouseXArray = [0, 0, 0, 0, 0];

    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        if (e.clientX > getMean(previousMouseXArray)) {
            cursor.classList.remove("left");
            cursor.classList.add("right");
        } else {
            cursor.classList.remove("right");
            cursor.classList.add("left");
        }

        previousMouseXArray.shift();
        previousMouseXArray = [...previousMouseXArray, e.clientX];
    });

    allLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => cursor.classList.add("up"));
        link.addEventListener("mouseleave", () => cursor.classList.remove("up"));
    });

    forwardButton.addEventListener("mouseenter", () =>
        cursor.classList.add("forwards")
    );
    forwardButton.addEventListener("mouseleave", () =>
        cursor.classList.remove("forwards")
    );

    backwardButton.addEventListener("mouseenter", () =>
        cursor.classList.add("backwards")
    );
    backwardButton.addEventListener("mouseleave", () =>
        cursor.classList.remove("backwards")
    );
}
