import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, Flex, Heading } from "rebass"
import { MapView } from "../components/Map"

const Image = styled(GatsbyImage)`
  border-radius: 50%;
  border: 4px solid #fff;
  margin-top: -100px;
  margin-bottom: 1em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
`
const ImageContainer = styled(Flex)`
  display: flex;
  justify-content: center;
`
const DetailsContainer = styled(Box)`
  padding: 0 1.5em;
  border-bottom: 1px solid #f0f0f9;
  padding-bottom: 1em;
`
const Name = styled(Heading)`
  font-weight: 400;
  margin-bottom: 5px;
`
const Details = styled(Flex)`
  font-size: 14px;
  color: #6ea96e;
  justify-content: space-between;
  padding-bottom: 1em;
  border-bottom: 1px solid #f0f0f9;
`

export default function LandmarkDetails({ data }) {
  const {
    name,
    park,
    coordinates,
    state,
    description: { description },
  } = data.contentfulLandmark
  return (
    <Layout>
      <Box>
        <MapView center={coordinates} />
        <ImageContainer>
          <Image
            image={data.contentfulLandmark.image.gatsbyImageData}
            alt={data.contentfulLandmark.name}
          />
        </ImageContainer>
      </Box>
      <DetailsContainer>
        <Name as="h1">{name}</Name>
        <Details>
          <div>{park}</div>
          <div>{state}</div>
        </Details>
        <Box sx={{ fontSize: "14px" }}>
          <Name as="h2">About {name}</Name>
          {description}
        </Box>
      </DetailsContainer>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    contentfulLandmark(id: { eq: $id }) {
      id
      name
      park
      city
      state
      coordinates {
        latitude
        longitude
      }
      image {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: DOMINANT_COLOR
          width: 200
        )
      }
      description {
        description
      }
    }
  }
`
