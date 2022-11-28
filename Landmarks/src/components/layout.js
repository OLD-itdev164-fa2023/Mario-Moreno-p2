import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../components/Header"
import "./layout.css"
import styled from "styled-components"
import { LandmarksTheme } from "./themes/LandmarksTheme"

const Content = styled.div`
  margin: 0 auto;
  max-width: var(--size-content);
`
const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.green};
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LandmarksTheme>
      <Header siteTitle={data.site.siteMetadata.title || `Title`} />
      <Content>
        <main>{children}</main>
        <footer
          style={{
            marginTop: "1em",
            fontSize: `var(--font-sm)`,
            textAlign: "center",
            paddingBottom: "1em",
          }}
        >
          © {new Date().getFullYear()} &middot; Built by:
          {` `}
          <Link href="https://mario-moreno.com">Mario Moreno - ITDEV-164</Link>
        </footer>
      </Content>
    </LandmarksTheme>
  )
}

export default Layout
