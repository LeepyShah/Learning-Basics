const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
circle1.addEventListener("drag", (event) => {
  console.log("dragging");
});
circle2.addEventListener(
  "dragover",
  (event) => {
    event.preventDefault(); // prevent default to allow drop
  },
  false
);
circle2.addEventListener("drop", (event) => {
  circle1.style.backgroundColor = getColor();
  size = circle1.offsetWidth;
  new_circle = document.createElement("div");
//   new_circle.classList.add("circle2");
  new_circle.style.width = size * 0.8 + "px";
  new_circle.style.height = size * 0.8 + "px";
  console.log(new_circle.style.width);
  console.log(new_circle.style.height);
  new_circle.style.backgroundColor = getColor();
  new_circle.style.position = "absolute";
  new_circle.style.borderRadius = "50%";
  new_circle.style.justifyContent = "space-between";
  new_circle.style.top =
    Math.floor(Math.random() * (circle2.offsetHeight - size * 0.8)) + "px";
  new_circle.style.left =
    Math.floor(Math.random() * (circle2.offsetWidth - size * 0.8)) + "px";
  new_circle.setAttribute("draggable", true);
  new_circle.addEventListener("drag", (event) => {
    console.log("dragging");
  });
  circle2.appendChild(new_circle);
 
});
function getColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    console.log(color);
  }
  return color;
}
