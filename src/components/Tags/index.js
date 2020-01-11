import React from 'react';
import styles from './styles';

const { Container, Title, TagList, Tag, TagLink, Badge } = styles;

const Tags = ({ tags }) => {
  return (
    <>
      <Container>
        <Title>タグ一覧</Title>
        <TagList>
          { tags.map((tag, index) => {
          return (<Tag key={ index }>
                    <TagLink to={ `/tags/${ tag.fieldValue }` }>
                      { tag.fieldValue }
                      <Badge>
                        { tag.totalCount }
                      </Badge>
                    </TagLink>
                  </Tag>)
          })}
        </TagList>
      </Container>
    </>
  )
}

export default Tags;
