import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Hero = styled.section`
  width: var(--space-content);
  height: 300px;
`
const Image = styled(GatsbyImage)`
  width: 100%;
  object-fit: cover;
  object-position: left bottom;
  aspect-ratio: 1/1;
  height: 100%;
`

export const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLandmark(filter: { featured: { eq: true } }) {
        edges {
          node {
            name
            image {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  const img = data.allContentfulLandmark.edges[0].node.image.gatsbyImageData

  return (
    <Hero>
      <Image image={img} alt={data.allContentfulLandmark.edges[0].node.name} />
    </Hero>
  )
}
