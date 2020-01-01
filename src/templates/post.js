import React from "react"
import styled from 'styled-components'
import Layout from '../components/Layout';
import { graphql } from "gatsby"
import { Container } from '@material-ui/core'
import './post.scss'

const Post = props => {
  const post = props.data.contentfulPost
  const contentHtml = post.content.childMarkdownRemark.html

  return (
    <Layout>
      <PostContainer>
        <PublishedAt>{ post.publishedAt }に投稿</PublishedAt>
        <Title>{ post.title }</Title>
        <Tags>
          { post.tags.map(tag => {
            return (<Tag>{ tag }</Tag>)
          }) }
        </Tags>
        <Content dangerouslySetInnerHTML={ { __html: contentHtml  } } />
      </PostContainer>
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
        html }
      }
      tags
    }
  }
`

const PostContainer = styled(Container)`
  background-color: #FFF;
  margin-top: 32px;
  padding-top: 8px;
`

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 8px;
`

const PublishedAt = styled.p`
  color: #999999;
  font-size: 20px;
  margin-bottom: 8px;
`

const Content = styled.p`
  font-size: 16px;
`

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-bottom: 8px;
  border-bottom: 2px solid #999999;
  margin-bottom: 8px;
`

const Tag = styled.li`
  font-size: 16px;
  background-color: #EEEEEE;
  padding: 4px;
  border: 1px solid #EEEEEE;
  border-radius: 8px;
  margin-right: 4px;
`
