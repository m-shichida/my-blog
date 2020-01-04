import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import TopBanner from "../components/TopBanner"
import BlogPosts from '../components/BlogPosts';
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Helmet
        title="shicchi-blog"
        meta={[
          {
            name: 'google-site-verification',
            content:
              'vvTlrJs8zHJEg-ds-CVe6SaIEKGSUwen3tEuOFmJxVs',
          },
        ]}
      />
      <TopBanner />
      <BlogPosts edges={ data.allContentfulPost.edges }/>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPost {
      edges {
        node {
          content {
            childMarkdownRemark {
              html
            }
          }
          slug
          publishedAt(formatString:"YYYY/MM/DD")
          tags
          title
          titleImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
