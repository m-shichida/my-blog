import React from 'react'
import styles from './styles';

const { PublishedAt, Card, CardImage, CardContent, Title, Description, Tags, Tag } = styles

const PostCard = ({ edge }) => {
  const titleImage =  edge.node.titleImage.file.url
  const slug = edge.node.slug
  const title = edge.node.title
  const description = edge.node.description
  const publishedAt = edge.node.publishedAt
  const tags = edge.node.tags

  return(
    <Card to={ `/blog/${ slug }` }>
      <CardImage
        src={ titleImage }
      />
      <CardContent>
        <Title>{ title }</Title>
        <Description>{ description }</Description>
        <PublishedAt>{ publishedAt }</PublishedAt>
        <Tags>
          { tags.map((tag, index) => { return (<Tag key={ index }>{ tag }</Tag>) }) }
        </Tags>
      </CardContent>
    </Card>
  )
}

export default PostCard;
