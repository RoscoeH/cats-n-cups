import { AVAILABLE_LEVELS } from "./levels";

export default class Progress {
  levels = {};

  constructor() {
    this.createLevels();
  }

  createLevels() {
    this.levels = AVAILABLE_LEVELS.map((n) => ({
      number: n,
      locked: n > 1,
      stars: null,
    }));
  }

  completeLevel(number, stars) {
    const level = this.levels.find((level) => level.number === number);
    level.stars = stars;

    const nextLevel = this.levels.find(
      (level) => level.number === `${parseInt(number) + 1}`
    );
    if (nextLevel) {
      nextLevel.locked = false;
    }
  }
}
