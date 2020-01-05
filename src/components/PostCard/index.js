import React from 'react'
import Portfolio from '../../images/port-folio.png'
import styles from './styles';

const { PublishedAt, Card, CardImage, CardContent, Title, Tags, Tag } = styles

const PostCard = ({ edge }) => {
  const titleImage =  edge.node.titleImage ? edge.node.titleImage.file.url : Portfolio
  const slug = edge.node.slug
  const title = edge.node.title
  const publishedAt = edge.node.publishedAt
  const tags = edge.node.tags

  return(
    <Card to={ `/blog/${ slug }` }>
      <CardImage
        src={ titleImage }
      />
      <CardContent>
        <Title>{ title }</Title>
        <PublishedAt>{ publishedAt }</PublishedAt>
        <Tags>
          { tags.map((tag, index) => { return (<Tag key={ index }>{ tag }</Tag>) }) }
        </Tags>
      </CardContent>
    </Card>
  )
}

export default PostCard;
