import * as React from "react"
import { HeroImage } from "../components/Hero"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Landmark } from "../components/Landmark"
import styled from "styled-components"
import { Box } from "rebass"

const Grid = styled(Box)`
  box-sizing: border-box;
  display: grid;
  row-gap: 1.5em;
  column-gap: 30px;
  padding: 1.5rem;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`

const IndexPage = ({ data }) => {
  const landmarks = data.allContentfulLandmark.edges
  return (
    <Layout>
      <HeroImage />
      <Grid>
        {landmarks.map(edge => {
          return <Landmark edge={edge} key={edge.node.id} />
        })}
      </Grid>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allContentfulLandmark {
      edges {
        node {
          id
          category
          name
          slug
          featured
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`
