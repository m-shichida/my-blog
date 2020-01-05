import React from "react"
import styled from 'styled-components'
import Layout from '../components/Layout';
import { graphql } from "gatsby"
import { media, colors } from '../helpers/styleHelper';
import rehypeReact from "rehype-react"
import SEO from "../components/seo"
import Toc from '../components/Toc';
import './post.scss'

const Post = props => {
  const post = props.data.contentfulPost
  const contentHtml = post.content.childMarkdownRemark.htmlAst
  const toc = props.data.allMarkdownRemark.edges[0].node.tableOfContents

  return (
    <Layout>
      <Container>
        <SEO title={ post.title } />
        <PostWrapper>
          <PublishedAt>{ post.publishedAt }に投稿</PublishedAt>
          <Title>{ post.title }</Title>
          <Tags>
            { post.tags.map((tag, index) => {
              return (<Tag key={ index }>{ tag }</Tag>)
            }) }
          </Tags>
          <Description className='blog-content'>
            { renderAst(contentHtml) }
          </Description>
        </PostWrapper>
        <Toc
          toc={ toc }
        />
      </Container>
    </Layout>
  )
}

export default Post;

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      publishedAt(formatString:"YYYY/MM/DD")
      content {
        childMarkdownRemark {
          htmlAst
        }
      }
      tags
    }
    allMarkdownRemark {
      edges {
        node {
          tableOfContents(absolute: false)
        }
      }
    }
  }
`

const Container = styled.article`
  display: flex;
  justify-content: center;
  overflow: visible;
  margin: 32px 0;
  min-height: 86vh;
`

const PostWrapper = styled.div`
  background-color: ${ colors.white };
  padding: 32px;
  margin-right: 16px;
  max-width: 800px;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 8px;
  ${ media.phone`
    font-size: 26px;
  `}
`

const PublishedAt = styled.p`
  color: ${ colors.gray };
  font-size: 20px;
  margin-bottom: 8px;
`

const Description = styled.div`
`

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-bottom: 8px;
  border-bottom: 2px solid ${ colors.gray };
  margin-bottom: 32px;
`

const Tag = styled.li`
  font-size: 16px;
  background-color: ${ colors.lightGray };
  padding: 4px;
  border: 1px solid ${ colors.lightGray };
  border-radius: 8px;
  margin-right: 4px;
`

const Content = styled.pre`
  font-size: 1.6rem;
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'p': Content
  },
}).Compiler
