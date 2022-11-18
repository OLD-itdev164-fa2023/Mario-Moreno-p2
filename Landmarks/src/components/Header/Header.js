import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Heading, Flex } from "rebass"

import { Link } from "gatsby"

const Outer = styled.header`
  background: var(--color-primary);
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
const Nav = styled(Flex)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
const Title = styled(Heading)`
  flex: 4;
  color: white;
`
const StyledLink = styled(Link)`
  color: white;
  margin: 0 10px;
  font-family: var(--font-sans);
  text-decoration: none;
  &:hover {
    color: lightgrey;
  }
`
const MediaQuery = styled.div`
  @media (max-width: 510px) {
    display: none;
  }
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <Title>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Title>
      <Nav>
        <MediaQuery>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </MediaQuery>
      </Nav>
    </Inner>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
