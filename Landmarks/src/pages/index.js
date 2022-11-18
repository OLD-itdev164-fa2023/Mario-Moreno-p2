import * as React from "react"
import { HeroImage } from "../components/Hero"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Landmark } from "../components/Landmark"

const IndexPage = ({ data }) => {
  const landmarks = data.allContentfulLandmark.edges
  console.log(landmarks)

  return (
    <Layout>
      <HeroImage />
      <div>
        {landmarks.map(edge => {
          return <Landmark edge={edge} key={edge.node.id} />
        })}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allContentfulLandmark(sort: { category: ASC }) {
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
