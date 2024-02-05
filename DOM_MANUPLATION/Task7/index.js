const mainDiv = document.getElementById("header"); // Assuming the first div has the id "header"
    const subHeading = document.createElement("h3");
    subHeading.innerHTML = "Buy high-quality organic fruits online";
    mainDiv.appendChild(subHeading);

    subHeading.style.fontStyle = "italic";

    // 3. Inside the second Div, before the unordered list, add a paragraph tag showing "Total fruits: 4".
    const secondDiv = document.getElementById("second-div"); // Assuming the second div has the id "second-div"
    const totalFruitsParagraph = document.createElement("p");
    totalFruitsParagraph.innerHTML = "Total fruits: 4";
    secondDiv.insertBefore(totalFruitsParagraph, secondDiv.firstChild);

    // 4. On this paragraph tag set an id of "fruits-total".
    totalFruitsParagraph.id = "fruits-total";