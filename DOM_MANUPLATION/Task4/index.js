document.addEventListener("DOMContentLoaded", function() {
    // 1. Make the 3rd element in the list have a yellow background color.
    const thirdFruit = document.querySelector(".fruits:nth-child(3)");

    if (thirdFruit) {
        thirdFruit.style.backgroundColor = "yellow";
    } else {
        console.error("There is no 3rd element with the 'fruit' class.");
    }

    // 2. Make all the elements in the list have a bold font.
    const allFruits = document.querySelectorAll(".fruit");
    allFruits.forEach(fruit => {
        fruit.style.fontWeight = "bold";
    });
});
