import React from "react"
import SEO from '../components/seo'
import Layout from "../components/Layout"
import TopBanner from "../components/TopBanner"
import BlogPosts from '../components/BlogPosts';
import AdSense from 'react-adsense'
import { default as TotalTags } from '../components/Tags';
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO />
      <Layout>
        <TopBanner />
        <TotalTags tags={ data.allContentfulPost.group }/>
        <BlogPosts posts={ data.allContentfulPost.edges }/>
        <AdSense.Google
          style={{ display: 'block', 'text-align': 'center' }}
          client={ process.env.GOOGLE_ADSENSE_ID }
          slot=''
        />
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
