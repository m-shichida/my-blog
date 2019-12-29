import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBanner from "../components/TopBanner"
import About from '../components/About'
import 'minireset.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TopBanner />
    <About />
  </Layout>
)

export default IndexPage
