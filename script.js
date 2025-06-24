const DEFAULT = {
  NUM_OF_SQUARES: 16,
  MAX_SQUARES: 100,
  MIN_SQUARES: 10,
};
const container = document.querySelector(".container");
const btnReset = document.querySelector(".btn-reset");
const input = document.querySelector("#user-input");
let hue = 0;

function createGrid(numOfSquares) {
  if (
    numOfSquares > DEFAULT.MAX_SQUARES ||
    numOfSquares < DEFAULT.MIN_SQUARES
  ) {
    alert(
      `The number should be less than ${DEFAULT.MAX_SQUARES} and greater than ${DEFAULT.MIN_SQUARES}`
    );
    return;
  } else if (!Number.isInteger(numOfSquares)) {
    alert("Please enter a valid integer");
    return;
  }

  const totalSquares = numOfSquares ** 2;
  document.documentElement.style.setProperty("--num-of-squares", numOfSquares);

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    container.appendChild(square);
  }
}

function deletePreviousGrid() {
  container.innerHTML = "";
}

function addColoredClass(e) {
  e.target.style.backgroundColor = `hsl(${hue}, 96%, 67%)`;
  hue = (hue + 1) % 361;
}

function removeColoredClass() {
  const divs = container.querySelectorAll("div");
  divs.forEach((div) => div.style.removeProperty("background-color"));
}

function handleUserInput(e) {
  e.preventDefault();
  let userInput = parseInt(e.target[0].value);
  deletePreviousGrid();
  createGrid(userInput);
}



input.addEventListener("submit", handleUserInput);
container.addEventListener("mouseover", addColoredClass)
btnReset.addEventListener("click", removeColoredClass);

createGrid(DEFAULT.NUM_OF_SQUARES);
