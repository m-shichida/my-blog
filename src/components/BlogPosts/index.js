import React from 'react';
import { Card, CardActionArea,
         CardContent, Typography } from '@material-ui/core';
import Portfolio from './port-folio.png'
import styles from './styles';
import { graphql, Link } from 'gatsby';

const { Container, Tag } = styles;

const BlogPosts = props => {
  return(
    <Container>
      { props.edges.map(edge => {
        return (
          <Link to={ `/blog/${edge.node.slug}` } style={ { textDecoration: 'none' } }>
            <Card style={ { width: '330px', marginRight: '16px' } }>
              <CardActionArea>
                <img
                  src={ Portfolio }
                />
                <CardContent>
                  <Typography>{ edge.node.title }</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        )
      })}
    </Container>
  )
}

export default BlogPosts;
