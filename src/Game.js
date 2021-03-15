const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export class Game {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.cats = [];
    this.observers = [];

    this.createCats();
  }

  createCats() {
    // Create a list of cats
    for (let i = 0; i < this.rows * this.cols; i++) {
      this.cats.push({ id: i, x: null, y: null, friends: [], mad: false });
    }

    // Randomise positions
    shuffle(this.cats);

    // Put the cats into a temporary grid
    const rows = [];
    for (let y = 0; y < this.rows; y++) {
      const row = [];
      for (let x = 0; x < this.cols; x++) {
        row.push(this.cats[y * this.cols + x]);
      }
      rows.push(row);
    }

    // Iterate over the grid and assign adjact cats as friends
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        const cat = rows[y][x];

        // Above
        if (y > 0) {
          cat.friends.push(rows[y - 1][x].id);
        }

        // Below
        if (y < this.rows - 1) {
          cat.friends.push(rows[y + 1][x].id);
        }

        // Left
        if (x > 0) {
          cat.friends.push(rows[y][x - 1].id);
        }

        // Right
        if (x < this.cols - 1) {
          cat.friends.push(rows[y][x + 1].id);
        }
      }
    }
  }

  observe(o) {
    this.observers.push(o);
    this.emitChange();
    return () => {
      this.observers = this.observers.filter((t) => t !== o);
    };
  }

  returnCat(id) {
    console.log("return cat");
    const cat = this.cats.find((cat) => cat.id === id);
    cat.x = null;
    cat.y = null;

    this.setMoods();
    this.emitChange();
  }

  moveCat(id, toX, toY) {
    // Remove existing cat
    const existingCat = this.cats.find((cat) => cat.x === toX && cat.y === toY);
    if (existingCat) {
      existingCat.x = null;
      existingCat.y = null;
    }

    const cat = this.cats.find((cat) => cat.id === id);
    cat.x = toX;
    cat.y = toY;

    this.setMoods();

    this.emitChange();
  }

  setMoods() {
    // Get the cats on the board
    const catsInCups = this.cats.filter(
      (cat) => cat.x !== null && cat.y !== null
    );

    catsInCups.forEach((cat) => {
      // Reset the mood of the cat
      cat.mad = false;

      console.log("checking cat", cat.id);

      // Look for a cat in each direction
      DIRECTIONS.forEach((dir) => {
        const [dX, dY] = dir;
        const adjacentX = cat.x + dX;
        const adjacentY = cat.y + dY;
        console.log("adj", adjacentX, adjacentY);
        if (
          adjacentX >= 0 &&
          adjacentX < this.cols &&
          adjacentY >= 0 &&
          adjacentY < this.rows
        ) {
          console.log("checking at pos", adjacentX, adjacentY);
          const adjacentCat = catsInCups.find(
            (cat) => cat.x === adjacentX && cat.y === adjacentY
          );

          console.log("adjCat", adjacentCat);

          // If we find a cat that is not in our friends list
          if (adjacentCat && !cat.friends.includes(adjacentCat.id)) {
            adjacentCat.mad = true;
            cat.mad = true;
          }
        }
      });
    });
  }

  // canMoveKnight(toX, toY) {
  //   const [x, y] = this.knightPosition;
  //   const dx = toX - x;
  //   const dy = toY - y;
  //   return (
  //     (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
  //     (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  //   );
  // }

  emitChange() {
    console.log(">emitChange");
    const cats = this.cats;
    console.log("cats", this.cats);
    this.observers.forEach((o) => o && o(Math.random()));
  }
}
