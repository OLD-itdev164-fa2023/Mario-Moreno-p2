import { ThemeProvider } from "styled-components"
import React from "react"

const theme = {
  fontSizes: [12, 14, 16, 20, 24, 32],
  breakpoints: ["40em", "52em", "64em"],

  colors: {
    blue: "#4659ff",
    lightBlue: "#80a8ff",
    beige: "#ebebeb",
    green: "#458c48",
    dark: "#1f1f1f",
    brown: "#886956",
    grey: "#7a7a7a",
  },
  icons: {},
}

export function LandmarksTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
