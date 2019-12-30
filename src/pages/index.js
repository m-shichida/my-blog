import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBanner from "../components/TopBanner"
import About from '../components/About'
import Products from '../components/Products';
import 'minireset.css'
import '../helpers/common.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TopBanner />
    <About />
    <Products />
  </Layout>
)

export default IndexPage
