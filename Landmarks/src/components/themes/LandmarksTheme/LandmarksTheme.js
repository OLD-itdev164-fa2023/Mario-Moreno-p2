import { ThemeProvider } from "styled-components"
import React from "react"
import { Menu } from "@styled-icons/heroicons-solid/Menu"

const theme = {
  fontSizes: [12, 14, 16, 20, 24, 32],
  breakpoints: ["40em", "52em", "64em"],
  colors: {
    blue: "#4659ff",
    lightBlue: "#80a8ff",
    beige: "#ebebeb",
    green: "#458c48",
    limeGreen: "#BDE038",
    dark: "#1f1f1f",
    brown: "#886956",
    grey: "#7a7a7a",
  },
  icons: {
    Hamburger: <Menu />,
  },
}

export function LandmarksTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
