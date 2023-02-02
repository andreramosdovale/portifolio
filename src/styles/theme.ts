import { extendTheme } from "@chakra-ui/react";

const colors = {
  initialColorMode: "",
  primaryColor: "",
};

const breakpoints = {
  xs: "320px",
  sm: "500px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
  "3xl": "1900px",
};

export const deafaultTheme = extendTheme({ colors, breakpoints });
