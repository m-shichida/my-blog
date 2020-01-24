import React from 'react';
import AdSense from 'react-adsense'
import PostCard from '../PostCard';
import styles from './styles';

const { Container } = styles;

const BlogPosts = ({ posts }) => {
  return(
    <>
      <Container>
        { posts.map((post, index) => { return (<PostCard key={ index } post={ post }/>) }) }
      </Container>
      <AdSense.Google
        client={ process.env.GOOGLE_ADSENSE_ID }
        slot=''
      />
    </>
  )
}

export default BlogPosts;
