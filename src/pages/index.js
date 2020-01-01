import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBanner from "../components/TopBanner"
import About from '../components/About'
import Products from '../components/Products';
import { graphql } from 'gatsby';
import 'minireset.css'
import '../helpers/common.css'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <TopBanner />
      <About />
      <Products />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPost {
      edges {
        node {
          slug
          title
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

export default IndexPage
