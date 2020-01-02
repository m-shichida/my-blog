import React from "react"
import Layout from "../components/Layout"
import TopBanner from "../components/TopBanner"
import BlogPosts from '../components/BlogPosts';
import '../helpers/common.scss'

const IndexPage = ({ data }) => {
  return (
    <Layout>
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
          slug
          title
          content {
            childMarkdownRemark {
              html
            }
          }
          publishedAt(formatString:"YYYY/MM/DD")
          tags
        }
      }
    }
  }
`

export default IndexPage
