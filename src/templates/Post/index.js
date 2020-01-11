import React from "react"
import Layout from '../../components/Layout';
import { graphql, Link } from "gatsby"
import rehypeReact from "rehype-react"
import SEO from "../../components/seo"
import Toc from '../../components/Toc';
import styles from './styles'
import './post.scss'

const { Container, PostWrapper, Title, PublishedAt,
        Description, Tags, Tag, Content } = styles;

const Post = ({ data }) => {
  const post = data.contentfulPost
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
              return (<Tag key={ index }><Link to={ `/tags/${ tag }`}>{ tag }</Link></Tag>)
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

// TODO: 投稿順にしたい
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

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'p': Content
  },
}).Compiler
