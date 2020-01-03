import React from 'react';
import styles from './styles';

const { GithubLink } = styles;

const Github = () => {
  return (
    <GithubLink href="https://github.com/m-shichida" target="_blank" rel="noopener noreferrer">
      <img src="https://grass-graph.moshimo.works/images/m-shichida.png" alt='github Contribution Graph' />
    </GithubLink>
  )
}

export default Github;
