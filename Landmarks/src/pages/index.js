import * as React from "react"
import { HeroImage } from "../components/Hero"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <HeroImage />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
