import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Card, Text } from "rebass"

export const Landmark = ({ edge }) => {
  return (
    <Card width={256}>
      <Link to={edge.node.slug}>
        <GatsbyImage
          image={edge.node.image.gatsbyImageData}
          alt={edge.node.name}
        />
      </Link>
      <Text>{edge.node.name}</Text>
    </Card>
  )
}
