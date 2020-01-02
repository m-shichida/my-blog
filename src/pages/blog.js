import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import BlogContents from "../components/BlogContents"
import BlogSideBar from '../components/BlogSideBar';
import BlogPosts from '../components/BlogPosts';
import { graphql } from 'gatsby';

const Blog = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="blog" />
        <BlogContents>
          <BlogPosts edges={ data.allContentfulPost.edges }/>
          <BlogSideBar />
        </BlogContents>
      </Layout>
    </>
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

export default Blog;
