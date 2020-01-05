import React from 'react';
import styles from './styles';

const { Container, TocList } = styles;

const Toc = props => {
  return (
    <Container
    >
      <TocList
        dangerouslySetInnerHTML=
        {{
            __html: props.toc
        }}
      />
    </Container>
  )
}

export default Toc;
