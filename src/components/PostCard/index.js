import React from 'react'
import { Card, CardActionArea,
         CardContent, Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import Portfolio from '../../images/port-folio.png'
import styles from './styles';

const { PublishedAt, Tags, Tag } = styles

const PostCard = ({ edge }) => {
  const slug = edge.node.slug
  const title = edge.node.title
  const publishedAt = edge.node.publishedAt
  const tags = edge.node.tags

  return(
    <Link to={ `/blog/${ slug }` } style={ { textDecoration: 'none' } }>
      <Card style={ { width: '400px', marginRight: '16px' } }>
        <CardActionArea>
          <img
            src={ Portfolio }
          />
          <CardContent>
            <Typography>{ title }</Typography>
            <PublishedAt>{ publishedAt }</PublishedAt>
            <Tags>
              { tags.map(tag => { return (<Tag>{ tag }</Tag>) }) }
            </Tags>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default PostCard;
