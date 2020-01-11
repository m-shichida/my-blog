import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import TopBanner from "../components/TopBanner"
import BlogPosts from '../components/BlogPosts';
import { default as TotalTags } from '../components/Tags';
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
          {
            name: 'description',
            content: '技術的な投稿のほか、学んだことや経験したことをまとめるブログ兼ポートフォリオサイトです。'
          }
        ]}
      />
      <TopBanner />
      <TotalTags tags={ data.allContentfulPost.group }/>
      <BlogPosts posts={ data.allContentfulPost.edges }/>
    </Layout>
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
