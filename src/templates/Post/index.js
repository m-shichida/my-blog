import React from "react"
import Layout from '../../components/Layout'
import { graphql, Link } from "gatsby"
import rehypeReact from "rehype-react"
import SEO from "../../components/seo"
import Share from '../../components/Share'
import Toc from '../../components/Toc'
import styles from './styles'
import './post.scss'

const { Container, PostWrapper, Title, PublishedAt,
        Description, Tags, Tag, Content } = styles;

const Post = ({ data }) => {
  const post = data.contentfulPost
  const contentHtml = post.content.childMarkdownRemark.htmlAst
  const toc = post.content.childMarkdownRemark.tableOfContents
  const url = `https://shicchi-blog.com/blog/${ post.slug }`
  const image = `https:${ post.titleImage.file.url }`

  return (
    <Layout>
      <SEO title={ post.title } description={ post.description } url={ url } image={ image } />
      <Container>
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
          <Share
            title={ post.title }
            hashtags={ post.tags }
            url={ url }
            description={ post.description }
          />
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
      titleImage {
        file {
          url
        }
      }
      publishedAt(formatString:"YYYY/MM/DD")
      content {
        childMarkdownRemark {
          htmlAst
          tableOfContents(absolute: false)
        }
      }
      description
      tags
      slug
    }
  }
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'p': Content
  },
}).Compiler
