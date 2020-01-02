import React from "react"
import Layout from "../components/Layout"
import TopBanner from "../components/TopBanner"
import About from '../components/About'
import Products from '../components/Products';
import '../helpers/common.scss'

const IndexPage = () => {
  return (
    <Layout>
      <TopBanner />
      <About />
      <Products />
    </Layout>
  )
}

export default IndexPage
