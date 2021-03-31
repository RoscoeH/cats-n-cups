import { generateColors, range, shuffle } from "./utils";
import Observable from "./observable";
import LEVELS, { AVAILABLE_LEVELS, LEVEL_CONTENTS } from "./levels";

const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const MAX_STARS = 3;

export class Game {
  level = null;
  rows = null;
  cols = null;
  cats = [];
  startTime = null;
  timer = null;
  grid = null;
  stars = 0;
  time = new Observable(0);
  moves = new Observable(0);
  solved = new Observable(false);

  loadLevel(level) {
    if (this.level) return;

    this.level = level;

    if (!AVAILABLE_LEVELS.includes(level)) {
      throw new Error(
        `Couldn't find level "${level}". Available levels are ${AVAILABLE_LEVELS.join(
          ", "
        )}`
      );
    }

    const levelData = LEVELS[level];
    this.createGrid(levelData);
    this.createCats();
  }

  createGrid(levelData) {
    this.rows = levelData.length;
    this.cols = levelData[0].length;
    this.grid = range(this.rows).map((row) =>
      range(this.cols).map((col) =>
        levelData[row][col] === LEVEL_CONTENTS.CUP ? new Observable(null) : null
      )
    );
  }

  createCat(x, y, id, colors) {
    return new Observable({
      id,
      color: colors.color,
      faceColor: colors.faceColor,
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
    const numCats = this.grid.reduce(
      (count, row) =>
        count + row.reduce((catsInRow, cell) => catsInRow + (cell ? 1 : 0), 0),
      0
    );
    const colors = generateColors(numCats);

    let i = 0;
    range(this.rows).forEach((row) =>
      range(this.cols).forEach((col) => {
        if (this.grid[row][col]) {
          const id = row * this.cols + col;
          this.cats.push(this.createCat(col, row, id, colors[i]));
          i++;
        }
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

    const toCell = this.grid[toPos.y][toPos.x];
    const existingCat = toCell.get();

    toCell.set(cat);

    if (fromPos) {
      const fromCell = this.grid[fromPos.y][fromPos.x];
      fromCell.set(existingCat);
    } else if (existingCat) {
      existingCat.set({ ...existingCat.get(), docked: true, mad: false });
    }

    this.incrementMoves();
    this.startTimer();
    this.setMoods();
    this.checkSolved();
  }

  checkSolved() {
    // Check every cat has a position and are happy
    if (
      this.cats.every(
        (cat) => cat.get().docked === false && cat.get().mad === false
      )
    ) {
      clearInterval(this.timer);
      this.calculateStars();
      this.solved.set(true);
    }
  }

  calculateStars() {
    const numCups = this.rows * this.cols;
    const moveGoal = numCups * 2;
    const maxMoveStars = MAX_STARS / 2;
    const moveStars = Math.min(
      maxMoveStars,
      (maxMoveStars * Math.abs(moveGoal * 1.5 - this.moves.get())) / moveGoal
    );

    const timeGoal = numCups * 4;
    const maxTimeStars = MAX_STARS / 2;
    const timeStars = Math.min(
      maxTimeStars,
      (maxTimeStars * Math.abs(timeGoal * 1.5 - this.time.get())) / timeGoal
    );

    this.stars = moveStars + timeStars;
  }

  calculateTime() {
    const seconds = Math.floor((Date.now() - this.startTime) / 1000);
    this.time.set(seconds);
  }

  setMoods(ignoredId) {
    this.grid.forEach((row, y) =>
      row.forEach((cell, x) => {
        if (cell) {
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
                const adjacentCell = this.grid[adjacentY][adjacentX];
                if (adjacentCell) {
                  const adjacentCat = adjacentCell.get();

                  // If we find a cat that is not in our friends list
                  if (
                    adjacentCat &&
                    adjacentCat.get().id !== ignoredId &&
                    !cat.get().friends.includes(adjacentCat.get().id)
                  ) {
                    mad = true;
                  }
                }
              }
            });
            cat.set({ ...cat.get(), mad });
          }
        }
      })
    );
  }
}
