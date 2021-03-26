import { AVAILABLE_LEVELS } from "./levels";

export function initProgress() {
  return AVAILABLE_LEVELS.map((n) => ({
    number: n,
    locked: n > 1,
    stars: null,
  }));
}

export function completeLevel(levels, number, stars) {
  const level = levels.find((level) => level.number === number);
  level.stars = stars;

  const nextLevel = levels.find(
    (level) => level.number === `${parseInt(number) + 1}`
  );
  if (nextLevel) {
    nextLevel.locked = false;
  }

  return levels;
}
