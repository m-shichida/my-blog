import React from "react"
import Layout from "../components/Layout"
import TopBanner from "../components/TopBanner"
import BlogPosts from '../components/BlogPosts';

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
