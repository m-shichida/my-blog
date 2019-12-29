import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBanner from "../components/TopBanner"
import 'minireset.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TopBanner />
  </Layout>
)

export default IndexPage
