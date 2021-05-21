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

export function getCompletionPercent(progress) {
  let completionPercent = 0;
  if (progress) {
    const stars = progress.reduce((count, level) => count + level.stars, 0);
    completionPercent = Math.round((stars / (progress.length * 3)) * 100);
  }
  return completionPercent;
}
