import { extendTheme } from "@chakra-ui/react";

const colors = {
  primaryColor: "",
  backgroundColor: ""
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
