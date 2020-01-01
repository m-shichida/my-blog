import React from 'react';
import Github from '../Github';
import styles from './styles'

const { BlogContentsWrapper } = styles;

const BlogContents = ({ children }) => {
  return (
    <div style={ { minHeight: '87vh' } }>
      <Github />
      <BlogContentsWrapper>
        { children }
      </BlogContentsWrapper>
    </div>
  )
}

export default BlogContents;
