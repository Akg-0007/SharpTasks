const fifthLi = document.getElementsByTagName("li")[4];     
fifthLi.style.color = "blue";
const allLiTags = document.getElementsByTagName("li");
for (let i = 0; i < allLiTags.length; i++) {
allLiTags[i].style.fontStyle = "italic";
}