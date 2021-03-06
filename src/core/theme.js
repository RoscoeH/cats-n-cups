import "typeface-nunito";

const theme = {
  fonts: {
    body: '"Nunito", sans-serif',
    heading: '"Nunito", sans-serif',
    monospace: "Menlo, monospace",
  },
  fontSizes: [16, 24, 32, 48, 64, 96],
  space: [0, 4, 8, 16, 32, 64, 128, 246, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 246, 512],
  radii: [0, 2, 4, 8, 16, 32, 61, 99999],
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
    dark: "#000",
    light: "#fff",
    border: "rgba(0, 0, 0, 0.15)",
    hover: "rgba(0,0,0,0.5)",
    shadow: "rgba(0,0,0,0.1)",
    cup: "#5C606F",
    angry: "#FF5353",
    cat: {
      black: "#333333",
      blue: "#8C9399",
      gray: "#D5D1C8",
      white: "#EEEEEE",
      cream: "#FBE8C8",
      amber: "#F1D256",
      cinnamon: "#C18A2D",
      chocolate: "#83692C",
      brown: "#B59978",
    },
    star: {
      gold: "#FFD130",
      brown: "#937200",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
    },
    h1: {
      fontSize: 3,
    },
    h2: {
      fontSize: 2,
      m: 0,
    },
  },
};

export default theme;
