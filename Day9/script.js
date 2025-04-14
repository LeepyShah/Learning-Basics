const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
circle1.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("size", circle1.offsetWidth);
});
circle2.addEventListener("dragover", (event) => {
    event.preventDefault(); 
});
