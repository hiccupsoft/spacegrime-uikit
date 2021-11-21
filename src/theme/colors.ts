import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1c8ffe",
  primaryBright: "#1c8ffe",
  primaryDark: "#1c8ffe",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#d3d8fe",
  backgroundGradient: "#dcdff3",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#f4f6f9",
  input: "#f1f2fe",
  tertiary: "#c8cbea",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#f4f6f9",
  gradients: {
    bubblegum: ""
  }
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#050545",
  backgroundGradient: "#dcdff3",
  backgroundDisabled: "#3c3742",
  contrast: "#050545",
  invertedContrast: "#191326",
  input: "#3a3996",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#050545",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
