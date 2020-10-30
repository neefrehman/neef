const carousel = document.querySelector(".carousel");
const backwardButton = document.querySelector(".control.backward");
const forwardButton = document.querySelector(".control.forward");


// Image width + image border
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

    // Use an array of the mouse's previous X position so that we can get an average
    let previousMouseXArray = Array(30).fill(0);

    // Get the average from our array of positions
    const getAverageMouseX = () =>
        previousMouseXArray.reduce((acc, cur) => acc + cur) / array.length;

    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

        // Using an average helps make the transition smoother, as the fish
        // wont change state if the mouse only moves a few pixels
        if (e.clientX > getAverageMouseX()) {
            cursor.classList.remove("left");
            cursor.classList.add("right");
        } else {
            cursor.classList.remove("right");
            cursor.classList.add("left");
        }

        // Here we remove the first item in out array
        previousMouseXArray.shift();
        // and then add our current position to the end of the array for next time this event fires
        previousMouseXArray = previousMouseXArray.concat(e.clientX);
    });

    // Here we add the various classes to style our cursor depending on where the mouse is
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
