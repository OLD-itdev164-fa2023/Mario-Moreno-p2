import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { Card, Text } from "rebass"

const Image = styled(GatsbyImage)`
  border-radius: 10px;
`
const Name = styled(Text)`
  font-weight: 500;
  padding: 0.5em;
`

export const Landmark = ({ edge }) => {
  return (
    <Card width={250}>
      <Link to={edge.node.slug}>
        <Image image={edge.node.image.gatsbyImageData} alt={edge.node.name} />
      </Link>
      <Name>{edge.node.name}</Name>
    </Card>
  )
}
