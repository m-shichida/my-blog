import React from "react"
import AdSense from 'react-adsense'
import SEO from '../components/seo'
import Layout from "../components/Layout"
import TopBanner from "../components/TopBanner"
import BlogPosts from '../components/BlogPosts';
import { default as TotalTags } from '../components/Tags';
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO />
      <AdSense.Google
            client={ process.env.GOOGLE_ADSENSE_ID }
            slot=''
      />
      <Layout>
        <TopBanner />
        <TotalTags tags={ data.allContentfulPost.group }/>
        <BlogPosts posts={ data.allContentfulPost.edges }/>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allContentfulPost {
      group(field: tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          content {
            childMarkdownRemark {
              html
            }
          }
          description
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
