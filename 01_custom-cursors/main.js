const carousel = document.querySelector(".carousel");
const backwardButton = document.querySelector(".control.backward");
const forwardButton = document.querySelector(".control.forward");

forwardButton.addEventListener("click", () => carousel.scrollBy({ left: 1 }));
backwardButton.addEventListener("click", () => carousel.scrollBy({ left: -1 }));
