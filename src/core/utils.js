import { random } from "@ctrl/tinycolor";

export function shuffle(array) {
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

export function range(n) {
  return [...Array(n).keys()];
}

export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const time = `${remainingSeconds}s`;
  return minutes > 0 ? `${minutes}m ${time}` : time;
}

export function generateColors(count) {
  let colors = [];

  function generate() {
    const newColors = random({ count: count - colors.length });
    newColors.forEach((color) => colors.push(color));
  }

  function filter() {
    // Remove red colors
    colors = colors.filter((color) => {
      const hue = color.toHsv().h;
      return hue > 20 && hue < 340;
    });

    // Remove similar colors
    colors = colors.filter((color) => {
      const otherColors = colors.filter((otherColor) => color !== otherColor);

      return otherColors.every((otherColor) => {
        const hsv = color.toHsv();
        const otherHsv = otherColor.toHsv();
        const hueDiff = Math.abs(hsv.h - otherHsv.h);
        const satDiff = Math.abs(hsv.s - otherHsv.s);
        const valDiff = Math.abs(hsv.v - otherHsv.v);
        return hueDiff > 36 || satDiff > 0.3 || valDiff > 0.3;
      });
    });
  }

  while (colors.length < count) {
    generate();
    filter();
  }

  return colors.map((color) => ({
    color: color.toHexString(),
    faceColor: color.isDark() ? "#fff" : "#000",
  }));
}
