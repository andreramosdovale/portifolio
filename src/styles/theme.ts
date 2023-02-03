import { extendTheme } from "@chakra-ui/react";

const colors = {
  fontColorPrimary: "#fff",
  primaryColor: "#b33cff",
  primaryGrayColor: "#3f3d3b",
  secondaryGrayColor: "#32312f",
  tertiaryGreyColor: "#454340",
};

const breakpoints = {
  xxs: "280px",
  xs: "400px",
  sm: "500px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
  "3xl": "1900px",
  "4xl": "2500px",
};

export const deafaultTheme = extendTheme({ colors, breakpoints });
export const defaultColors = { ...colors };
