import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Heading, Flex, Box } from "rebass"
import { HamburgerButton } from "../Button/HamburgerButton"
import { Link } from "gatsby"
import { Landscape } from "@styled-icons/boxicons-regular/Landscape"
import { Close } from "@styled-icons/ionicons-solid/Close"

const Outer = styled.header`
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.blue};
  margin-bottom: 1.45rem;
  margin: 0 auto;
  padding: var(--space-2) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Inner = styled(Flex)`
  margin: 0 auto;
  width: 54rem;
  align-items: center;
`
const Nav = styled(Box)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const Title = styled(Heading)`
  flex: 4;
  color: white;
`
const StyledLink = styled(Link)`
  color: white;
  margin: 0 10px;
  padding: 0.2em 0;
  font-family: var(--font-sans);
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`
const MediaQuery = styled(Box)`
  @media screen and (max-width: 519px) {
    display: none;
  }
`

const NavButton = styled(Box)`
  display: none;

  @media only screen and (max-width: 519px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 20px;
  }
`
const Logo = styled(Landscape)`
  color: ${({ theme }) => theme.colors.lightBlue};
  cursor: pointer;
`
const MobileNav = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.blue};
  align-items: center;
  position: absolute;
  padding-top: 1.5em;
  top: 55px;
  left: 0px;
  width: 100%;
  z-index: 9;
  height: 100vh;
  transition: 0.9s height ease-in-out;
`

const Header = ({ siteTitle }) => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <Outer>
      <Inner>
        <StyledLink to="/">
          <Logo size={38} />
        </StyledLink>

        <Title>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </Title>
        <Nav>
          {toggle ? (
            <MobileNav>
              <StyledLink to="/" onClick={() => setToggle(false)}>
                Home
              </StyledLink>
              <StyledLink to="/lakes" onClick={() => setToggle(false)}>
                Lakes
              </StyledLink>
              <StyledLink to="/mountains" onClick={() => setToggle(false)}>
                Mountains
              </StyledLink>
              <StyledLink to="/rivers" onClick={() => setToggle(false)}>
                Rivers
              </StyledLink>
            </MobileNav>
          ) : (
            <MediaQuery>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/lakes">Lakes</StyledLink>
              <StyledLink to="/mountains">Mountains</StyledLink>
              <StyledLink to="/rivers">Rivers</StyledLink>
            </MediaQuery>
          )}
        </Nav>
        <NavButton onClick={handleClick}>
          {toggle ? <Close size={26} color={"white"} /> : <HamburgerButton />}
        </NavButton>
      </Inner>
    </Outer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
