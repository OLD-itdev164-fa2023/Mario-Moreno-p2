import * as React from "react"
import { HeroImage } from "../components/Hero"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Landmark } from "../components/Landmark"
import styled from "styled-components"
import { Box, Text } from "rebass"

const Grid = styled(Box)`
  box-sizing: border-box;
  display: grid;
  row-gap: 1.5em;
  column-gap: 20px;
  padding: 1.5rem;

  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  border-bottom: 1px solid #f0f0f9;
`
const Category = styled(Text)`
  font-size: 2em;
  padding: 0.5em 0 0 1em;
`

const IndexPage = ({ data }) => {
  const lakes = data.allContentfulLandmark.edges
    .filter(edge => edge.node.category === "Lakes")
    .sort((a, b) => a.node.name.localeCompare(b.node.name))

  const mountains = data.allContentfulLandmark.edges
    .filter(edge => edge.node.category === "Mountains")
    .sort((a, b) => a.node.name.localeCompare(b.node.name))

  const rivers = data.allContentfulLandmark.edges
    .filter(edge => edge.node.category === "Rivers")
    .sort((a, b) => a.node.name.localeCompare(b.node.name))

  return (
    <Layout>
      <HeroImage />
      <Category>Lakes</Category>
      <Grid>
        {lakes.map(edge => {
          return <Landmark edge={edge} key={edge.node.id} />
        })}
      </Grid>
      <Category>Mountains</Category>
      <Grid>
        {mountains.map(edge => {
          return <Landmark edge={edge} key={edge.node.id} />
        })}
      </Grid>
      <Category>Rivers</Category>

      <Grid>
        {rivers.map(edge => {
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
