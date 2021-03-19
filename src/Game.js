import { COLORS } from "./components/Pattern";
import { range, shuffle } from "./utils";
import Observable from "./observable";

const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

export class Game {
  cats = [];
  startTime = null;
  timer = null;
  grid = null;
  time = new Observable("0s");
  moves = new Observable(0);
  solved = new Observable(false);

  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.createGrid();
    this.createCats();
  }

  createGrid() {
    this.grid = range(this.rows).map(() =>
      range(this.cols).map(() => new Observable(null))
    );
  }

  createCat(x, y, id, color) {
    return new Observable({
      id,
      color: color,
      friends: DIRECTIONS.map(([dX, dY]) => {
        const adjacentX = x + dX;
        const adjacentY = y + dY;
        return adjacentX >= 0 &&
          adjacentX < this.cols &&
          adjacentY >= 0 &&
          adjacentY < this.rows
          ? adjacentY * this.cols + adjacentX
          : null;
      }).filter((id) => id !== null),
      docked: true,
      mad: false,
    });
  }

  createCats() {
    const colors = shuffle(COLORS.slice());

    range(this.rows).forEach((row) =>
      range(this.cols).forEach((col) => {
        const id = row * this.cols + col;
        this.cats.push(this.createCat(col, row, id, colors[id]));
      })
    );

    shuffle(this.cats);
  }

  incrementMoves() {
    this.moves.set(this.moves.get() + 1);
  }

  startTimer() {
    if (this.startTime === null) {
      this.startTime = Date.now();
      this.timer = setInterval(() => this.calculateTime(), 1000);
    }
  }

  returnCat(fromPos) {
    const cell = this.grid[fromPos.y][fromPos.x];
    const cat = cell.get();

    if (cat) {
      cat.set({ ...cat.get(), docked: true, mad: false });
      cell.set(null);

      this.incrementMoves();
      this.setMoods();
    }
  }

  moveCat(id, fromPos, toPos) {
    // Remove target cat from dock
    const cat = this.cats.find((cat) => cat.get().id === id);
    cat.set({ ...cat.get(), docked: false });

    // Remove existing cat from cell
    const toCell = this.grid[toPos.y][toPos.x];
    if (toCell.get()) {
      const existingCat = toCell.get();
      if (existingCat.get().id !== id) {
        existingCat.set({ ...existingCat.get(), docked: true });
      }
    }

    // Place target cat in cell
    toCell.set(cat);

    if (fromPos && (fromPos.x !== toPos.x || fromPos.y !== toPos.y)) {
      const fromCell = this.grid[fromPos.y][fromPos.x];
      fromCell.set(null);
    }

    this.incrementMoves();
    this.startTimer();
    this.setMoods();
    this.checkSolved();

    console.log(this);
  }

  checkSolved() {
    // Check every cat has a position and are happy
    if (
      this.cats.every(
        (cat) => cat.get().docked === false && cat.get().mad === false
      )
    ) {
      this.solved.set(true);
      clearInterval(this.timer);
    }
  }

  calculateTime() {
    const totalSeconds = Math.floor((Date.now() - this.startTime) / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    let time = `${seconds}s`;

    if (minutes > 0) {
      time = `${minutes}m ${time}`;
    }
    this.time.set(time);
  }

  setMoods() {
    this.grid.forEach((row, y) =>
      row.forEach((cell, x) => {
        const cat = cell.get();
        if (cat) {
          let mad = false;
          DIRECTIONS.forEach((dir) => {
            const [dX, dY] = dir;
            const adjacentX = x + dX;
            const adjacentY = y + dY;

            if (
              adjacentX >= 0 &&
              adjacentX < this.cols &&
              adjacentY >= 0 &&
              adjacentY < this.rows
            ) {
              const adjacentCat = this.grid[adjacentY][adjacentX].get();

              // If we find a cat that is not in our friends list
              if (
                adjacentCat &&
                !cat.get().friends.includes(adjacentCat.get().id)
              ) {
                mad = true;
              }
            }
          });
          cat.set({ ...cat.get(), mad });
        }
      })
    );
  }
}
