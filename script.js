const container = document.querySelector("#container");
const grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);

createControls();
createGrid(16);

function createControls() {
  const resizeButton = document.createElement("button");
  resizeButton.style.width = "100px";
  resizeButton.style.height = "50px";
  resizeButton.textContent = "Resize";
  resizeButton.addEventListener("click", () => {
    let size = 16;
    do {
      size = parseFloat(
        prompt(
          "How many fields (up to 100) should a side of the grid have?",
          "16"
        )
      );
    } while (size < 1 && size > 100);
    clearGrid();
    createGrid(size);
  });
  container.appendChild(resizeButton);
}

function clearGrid() {
  const grid = document.querySelector(".grid");
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
}

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.id = `row${i}`;
    for (let j = 0; j < size; j++) {
      const field = document.createElement("div");
      field.classList.add("field");
      field.id = `field${i}${j}`;
      let fieldWidth = grid.clientWidth / size;
      field.style.width = `${fieldWidth}px`;
      field.style.height = `${fieldWidth}px`;
      field.addEventListener("mouseenter", (e) => {
        if (!e.ctrlKey) {
          field.style.backgroundColor = "#256435";
        }
      });
      row.appendChild(field);
    }
    grid.appendChild(row);
  }
}
