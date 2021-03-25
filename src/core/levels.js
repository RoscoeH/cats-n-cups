export const LEVEL_CONTENTS = {
  BLANK: " ",
  CUP: "U",
};

const LEVELS = {
  1: [
    ["U", "U"],
    [" ", "U"],
  ],
  2: [
    ["U", "U"],
    ["U", "U"],
  ],
  3: [
    [" ", "U", " "],
    ["U", "U", "U"],
    [" ", "U", " "],
  ],
  4: [
    [" ", "U", " "],
    ["U", "U", "U"],
    ["U", "U", " "],
  ],
  5: [
    ["U", "U", " "],
    ["U", "U", "U"],
    [" ", "U", "U"],
  ],
  6: [
    ["U", "U", "U"],
    ["U", " ", "U"],
    ["U", "U", "U"],
  ],
  7: [
    ["U", "U", "U"],
    ["U", "U", "U"],
    ["U", "U", "U"],
  ],
  // Unused
  16: [
    ["U", "U", "U", "U"],
    ["U", "U", "U", "U"],
    ["U", "U", "U", "U"],
    ["U", "U", "U", "U"],
  ],
  25: [
    ["U", "U", "U", "U", "U"],
    ["U", "U", "U", "U", "U"],
    ["U", "U", "U", "U", "U"],
    ["U", "U", "U", "U", "U"],
    ["U", "U", "U", "U", "U"],
  ],
  36: [
    ["U", "U", "U", "U", "U", "U"],
    ["U", "U", "U", "U", "U", "U"],
    ["U", "U", "U", "U", "U", "U"],
    ["U", "U", "U", "U", "U", "U"],
    ["U", "U", "U", "U", "U", "U"],
    ["U", "U", "U", "U", "U", "U"],
  ],
};
export const AVAILABLE_LEVELS = Object.keys(LEVELS).map((level) =>
  parseInt(level)
);

export default LEVELS;