import { AVAILABLE_LEVELS } from "./levels";

export default class Progress {
  levels = {};

  constructor() {
    this.createLevels();
  }

  createLevels() {
    this.levels = AVAILABLE_LEVELS.map((n) => ({
      level: n,
      locked: n > 1,
      stars: null,
    }));
  }
}
