const container = document.querySelector(".container");
const DEFAULT_NUM_OF_SQUARES = 16;

function createGrid(numOfSquares) {
  const totalSquares = numOfSquares ** 2;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    container.appendChild(square);
  }
}


createGrid(DEFAULT_NUM_OF_SQUARES);
