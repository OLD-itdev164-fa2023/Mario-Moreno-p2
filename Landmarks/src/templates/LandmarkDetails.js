import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box } from "rebass"
import { MapView } from "../components/Map"

export default function LandmarkDetails({ data }) {
  const {
    name,
    city,
    park,
    coordinates,
    state,

    description: { description },
  } = data.contentfulLandmark
  return (
    <Layout>
      <Box>
        <MapView center={coordinates} />
        <GatsbyImage
          image={data.contentfulLandmark.image.gatsbyImageData}
          alt={data.contentfulLandmark.name}
        />
      </Box>
      <div>{name}</div>
      <div>{park}</div>
      <div>{city}</div>
      <div>{state}</div>
      <div>{description}</div>
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
          width: 300
        )
      }
      description {
        description
      }
    }
  }
`
