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
        <PostWrapper>
          <PublishedAt>{ post.publishedAt }に投稿</PublishedAt>
          <Title>{ post.title }</Title>
          <Tags>
            { post.tags.map(tag => {
              return (<Tag>{ tag }</Tag>)
            }) }
          </Tags>
          <Content className='blog-content' dangerouslySetInnerHTML={ { __html: contentHtml  } } />
        </PostWrapper>
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
  margin-top: 32px;
  min-height: 86vh;
`

const PostWrapper = styled.article`
  background-color: #FFF;
  padding: 24px;
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

const Content = styled.div`
  font-size: 16px;
`

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-bottom: 8px;
  border-bottom: 2px solid #999999;
  margin-bottom: 32px;
`

const Tag = styled.li`
  font-size: 16px;
  background-color: #EEEEEE;
  padding: 4px;
  border: 1px solid #EEEEEE;
  border-radius: 8px;
  margin-right: 4px;
`
