import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import TopBanner from "../components/TopBanner"
import About from '../components/About'
import Products from '../components/Products';
import 'minireset.css'
import '../helpers/common.css'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <TopBanner />
      <About />
      <Products />
    </Layout>
  )
}

export default IndexPage
