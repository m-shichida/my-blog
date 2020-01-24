import React from 'react'
import styles from './styles';

const { PublishedAt, Card, CardImage, CardActionArea, CardContent,
        Title, Description, Tags, Tag } = styles

const PostCard = ({ post }) => {
  // タグから検索するとnodeなしになる
  const slug = post.node ? post.node.slug : post.slug;
  const titleImage = post.node ? post.node.titleImage.file.url : post.titleImage.file.url;
  const title = post.node ? post.node.title : post.title
  const description = post.node ? post.node.description : post.description
  const publishedAt = post.node ? post.node.publishedAt : post.publishedAt
  const tags = post.node ? post.node.tags : post.tags

  return(
    <Card>
      <CardActionArea to={ `/blog/${ slug }` }>
        <CardImage
          src={ titleImage }
        />
        <Title>{ title }</Title>
      </CardActionArea>
        <CardContent>
          <Description>{ description }</Description>
          <PublishedAt>{ publishedAt }</PublishedAt>
        </CardContent>
      <Tags>
        { tags.map((tag, index) => { return (<Tag key={ index } to={ `/tags/${ tag }` }>{ tag }</Tag>) }) }
      </Tags>
    </Card>
  )
}

export default PostCard;
