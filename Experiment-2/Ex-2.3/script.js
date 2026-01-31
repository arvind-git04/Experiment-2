const svg = document.getElementById("drawingArea");
let drawing = false;
let path;

svg.addEventListener("mousedown", e => {
  drawing = true;
  path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke", "blue");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("d", `M ${e.offsetX} ${e.offsetY}`);
  svg.appendChild(path);
});

svg.addEventListener("mousemove", e => {
  if (!drawing) return;
  let d = path.getAttribute("d");
  path.setAttribute("d", d + ` L ${e.offsetX} ${e.offsetY}`);
});

svg.addEventListener("mouseup", () => drawing = false);
