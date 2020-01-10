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
  const toc = post.content.childMarkdownRemark.tableOfContents
  const description = post.description

  return (
    <Layout>
      <Container>
        <SEO title={ post.title } description={ description } />
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
          tableOfContents(absolute: false)
        }
      }
      description
      tags
    }
  }
`

//TODO: 一旦全て消してスマホ=>タブレット=>PCで作り直す。
const Container = styled.article`
  min-height: 86vh;
  ${ media.pc`
    display: flex;
    justify-content: center;
    margin: 16px 0;
  `}
`

const PostWrapper = styled.div`
  background-color: ${ colors.white };
  padding: 16px;
  ${ media.pc`
    width: 800px;
    padding: 32px;
  `}
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 8px;
  ${ media.tablet`
    font-size: 3rem;
  `}
  ${ media.pc`
    font-size: 3rem;
  `}
`

const PublishedAt = styled.p`
  color: ${ colors.gray };
  font-size: 1.6rem;
  margin-bottom: 8px;
  ${ media.pc`
    font-size: 2rem;
  `}
`

const Description = styled.div`
  font-size: 1rem;
`

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-bottom: 8px;
  border-bottom: 2px solid ${ colors.gray };
  margin-bottom: 16px;
`

const Tag = styled.li`
  font-size: 1.8rem;
  background-color: ${ colors.lightGray };
  padding: 8px;
  border: 1px solid ${ colors.lightGray };
  border-radius: 8px;
  margin-right: 8px;
`

const Content = styled.pre`
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'p': Content
  },
}).Compiler
