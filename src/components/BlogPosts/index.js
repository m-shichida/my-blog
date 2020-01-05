import React from 'react';
import PostCard from '../PostCard';
import styles from './styles';

const { Container } = styles;

const BlogPosts = props => {
  return(
    <Container>
      { props.edges.map((edge, index) => { return (<PostCard key={ index } edge={ edge }/>) }) }
    </Container>
  )
}

export default BlogPosts;
