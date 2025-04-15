const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
circle2.addEventListener("dragover", (e) => e.preventDefault());
circle2.addEventListener("drop", (e) => {
  e.preventDefault();

  // Get smallest nested size
  let latest = circle2.lastElementChild;

  // If there are no nested circles, set size to 80% of the circle2 size
  let size = latest
    ? parseFloat(latest.style.width) * 0.8
    : circle2.offsetWidth * 0.8;
  if (size < 5){
    //disable circle1
    circle1.style.pointerEvents = "none";
    circle1.style.opacity = "0";
    circle1.style.cursor = "not-allowed";
    alert("No more nested circles can be added.");
    return;
  }
  
  const originalColor = window.getComputedStyle(circle1).backgroundColor;

  // Create new nested circle
  const nested = document.createElement("div");
  nested.classList.add("nested");
  nested.style.width = size + "px";
  nested.style.height = size + "px";
  nested.style.backgroundColor = originalColor;
  nested.style.borderRadius = "50%";
  nested.style.position = "absolute";

  // Center it inside previous one
  nested.style.left = (circle2.offsetWidth - size) / 2 + "px";
  nested.style.top = (circle2.offsetHeight - size) / 2 + "px";
  circle2.appendChild(nested);

  // Change the color of the original circle
  circle1.style.backgroundColor = getRandomColor();
});
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
