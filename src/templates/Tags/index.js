import React from "react";
import SEO from "../../components/seo";
import Layout from '../../components/Layout';
import TopBanner from "../../components/TopBanner";
import { default as TotalTags } from '../../components/Tags';
import BlogPosts from '../../components/BlogPosts';
import { graphql } from "gatsby";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const posts = data.allContentfulPost.group.filter((post) => {
                  return post.fieldValue == tag
                })

  return (
    <Layout>
      <SEO title={ tag } />
      <TopBanner />
      <TotalTags tags={ data.allContentfulPost.group }/>
      <BlogPosts posts={ posts[0].nodes }/>
    </Layout>
  )
}

export default Tags;

// TODO: 並び替えたい(タグ多い順に)
// TODO: かつ投稿順にしたい

export const pageQuery = graphql`
  query {
    allContentfulPost {
      group(field: tags) {
        fieldValue
        totalCount
        nodes {
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
