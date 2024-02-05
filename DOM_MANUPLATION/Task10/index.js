document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const fruitToAddInput = document.getElementById("fruit-to-add");
    const fruitsList = document.querySelector(".fruits");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const fruitName = fruitToAddInput.value.trim();
      if (fruitName !== "") {
        createFruitItem(fruitName);
        fruitToAddInput.value = "";
      }
    });
  
    fruitsList.addEventListener("click", function (event) {
      if (event.target.classList.contains("delete-btn")) {
        const listItem = event.target.closest(".fruit");
        if (listItem) {
          listItem.remove();
        }
      } else if (event.target.classList.contains("edit-btn")) {
        const listItem = event.target.closest(".fruit");
        if (listItem) {
          const currentFruitName = listItem.firstChild.nodeValue.trim();
          const newFruitName = prompt("Edit fruit name:", currentFruitName);
          if (newFruitName !== null) {
            listItem.firstChild.nodeValue = newFruitName;
          }
        }
      }
    });
  
    function createFruitItem(fruitName) {
      const listItem = document.createElement("li");
      listItem.classList.add("fruit");
      listItem.textContent = fruitName;
  
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-btn");
      deleteButton.textContent = "x";
  
      const editButton = document.createElement("button");
      editButton.classList.add("edit-btn");
      editButton.textContent = "Edit";
  
      listItem.appendChild(deleteButton);
      listItem.appendChild(editButton);
  
      fruitsList.appendChild(listItem);
    }
  });
  