// Etch-a-sketch grid creation
const gridDimensions = 16 ** 2;

const container = document.querySelector("#container");

for (let i = 0; i < gridDimensions; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
}