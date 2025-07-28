// Etch-a-sketch grid creation
let gridDimensions = 16;

const container = document.querySelector("#container");
const sizeButton = document.querySelector("#size");
const resetButton = document.querySelector("#reset");

function generateGrid() {
    container.textContent = "";
    for (let i = 0; i < gridDimensions ** 2; i++) {
        const div = document.createElement("div");
        div.classList.add("box");

        let opacity = 0.1;
        let color = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()}, ${opacity})`;
        
        div.style.width = `calc((100% - 2px * (${gridDimensions} - 1)) / ${gridDimensions})`;
        div.style.aspectRatio = "1 / 1";

        div.addEventListener("mouseover", applyColor);
        // div.addEventListener("mouseover", () => {
        //     div.style.background = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
        // });

        function applyColor() {
            div.style.background = color;

            div.removeEventListener("mouseover", applyColor);

            div.addEventListener("mouseover", darkenValue);
        }

        function darkenValue() {
            opacity += 0.1;
            div.style.background = color;
        }

        container.appendChild(div);
    }
}

function randomNum() {
    return Math.floor(Math.random() * 256);
}

sizeButton.addEventListener("click", () => {
    do {
        gridDimensions = parseInt(prompt("Enter number (min 1, max 100) of squares for new grid:"));
    } while (gridDimensions > 100 || gridDimensions < 1);

    generateGrid();
})

resetButton.addEventListener("click", () => {
    generateGrid();
})

generateGrid()