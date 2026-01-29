


// Scroll Reviews 

document.addEventListener("DOMContentLoaded", () => {
    const reviews = document.querySelector(".reviews");
    const boxes = reviews.querySelectorAll(".box");

    if (!boxes.length) return;

    const middleIndex = Math.floor(boxes.length / 2);
    const target = boxes[middleIndex];

    const offset =
        target.offsetLeft -
        reviews.clientWidth / 2 +
        target.clientWidth / 2;

    reviews.scrollLeft = offset;
});