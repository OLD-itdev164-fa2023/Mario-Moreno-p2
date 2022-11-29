import React from "react"
import { ThemeConsumer } from "styled-components"
import { IconButton } from "./IconButton"

const HamburgerButton = props => (
  <ThemeConsumer>
    {theme => <IconButton icon={theme.icons.Hamburger} {...props} />}
  </ThemeConsumer>
)

export { HamburgerButton }
