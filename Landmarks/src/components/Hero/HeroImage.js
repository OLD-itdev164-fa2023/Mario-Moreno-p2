import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Text } from "rebass"

const Hero = styled.section`
  width: 100%;
  height: 500px;
  position: relative;
`
const Image = styled(GatsbyImage)`
  width: 100%;
  object-fit: cover;
  object-position: left bottom;
  aspect-ratio: 1/1;
  height: 100%;
`
const FeaturedLandmarkName = styled(Text)`
  position: absolute;
  left: 30px;
  bottom: 40px;
  color: white;
  font-size: 2em;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 1);
`
const ParkName = styled(Text)`
  position: absolute;
  left: 30px;
  bottom: 20px;
  color: white;
  font-size: 1em;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 1);
`

export const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLandmark(filter: { featured: { eq: true } }) {
        edges {
          node {
            name
            park
            image {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  const img = data.allContentfulLandmark.edges[0].node.image.gatsbyImageData
  const name = data.allContentfulLandmark.edges[0].node.name
  const park = data.allContentfulLandmark.edges[0].node.park

  return (
    <Hero>
      <Image image={img} alt={data.allContentfulLandmark.edges[0].node.name} />
      <FeaturedLandmarkName>{name}</FeaturedLandmarkName>
      <ParkName>{park}</ParkName>
    </Hero>
  )
}
