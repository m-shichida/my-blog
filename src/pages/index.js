import React from "react"
import SEO from '../components/seo'
import Layout from "../components/Layout"
import TopBanner from "../components/TopBanner"
import BlogPosts from '../components/BlogPosts';
import AdSense from 'react-adsense'
import { default as TotalTags } from '../components/Tags';
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '../helpers/styleHelper';

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO />
      <Layout>
        <TopBanner />
        <TotalTags tags={ data.allContentfulPost.group }/>
        <BlogPosts posts={ data.allContentfulPost.edges }/>
        <adsenseContainer>
          <AdSense.Google
            client={ process.env.GOOGLE_ADSENSE_ID }
            data-ad-format='auto'
            data-full-width-responsive='true'
          />
        </adsenseContainer>
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

const adsenseContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  ${ media.tablet`
    width: 760px;
  `}
  ${ media.pc`
    width: 1040px;
  `}
`

export default IndexPage
