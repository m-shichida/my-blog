import React from 'react';
import PostCard from '../PostCard';
import styles from './styles';

const { Container } = styles;

const BlogPosts = ({ posts }) => {
  return(
    <Container>
      { posts.map((post, index) => { return (<PostCard key={ index } post={ post }/>) }) }
    </Container>
  )
}

export default BlogPosts;
