import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
    <Card
      sx={{
        backgroundColor: "white",
        padding: ".5em",
        borderRadius: "5px",
      }}
    >
      <Link to={`/landmark/${edge.node.slug}`}>
        <Image image={getImage(edge.node.image)} alt={edge.node.name} />
      </Link>
      <Name>{edge.node.name}</Name>
    </Card>
  )
}
