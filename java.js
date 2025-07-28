// Set initial grid dimension (16 * 16)
let gridDimensions = 16;

// Get references to relevant DOM elements
const container = document.querySelector("#container");
const sizeButton = document.querySelector("#size");
const resetButton = document.querySelector("#reset");

// Generate grid of boxes/squares in the required dimensions
function generateGrid() {
    container.textContent = "";
    for (let i = 0; i < gridDimensions ** 2; i++) {
        const box = createBox(gridDimensions);
        container.appendChild(box);
    }
}

// Create each individual box/square
function createBox(gridDimensions) {
    const div = document.createElement("div");
    // Add a box class to them so relevant CSS styles apply
    div.classList.add("box");

    // Create variable for the square's opacity
    let opacity = 0;
    // Generate a random color to be applied to that square, and write it in CSS format
    const color = `rgba(${randomNum()}, ${randomNum()}, ${randomNum()}, `;
    
    // Set width equal to gridDimensions/total width of the container element (including gaps)
    div.style.width = `calc((100% - 2px * (${gridDimensions} - 1)) / ${gridDimensions})`;
    // Set aspect ratio so height is equal to width, making a square
    div.style.aspectRatio = "1 / 1";

    // Add color to square and darken its value with each mouseover
    div.addEventListener("mouseover", () => {
        opacity = Math.min(opacity + 0.1, 1);
        div.style.background = color + `${opacity})`;
    });

    return div;
}

// Generate random number from 0-255 (inclusive)
function randomNum() {
    return Math.floor(Math.random() * 256);
}

// Add option to remake grid with other dimensions
sizeButton.addEventListener("click", () => {
    // Ensure the dimensions entered by user are between 1 and 100
    do {
        gridDimensions = parseInt(prompt("Enter number (min 1, max 100) of squares for new grid:"));
    } while (gridDimensions > 100 || gridDimensions < 1);

    generateGrid();
})

// Reset grid to a blank slate, but keeping the same dimensions
resetButton.addEventListener("click", () => {
    generateGrid();
})

// Call function to generate initial grid when website first opened
generateGrid()