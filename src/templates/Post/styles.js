import styled from 'styled-components'
import { media, colors } from '../../helpers/styleHelper';

const Container = styled.article`
  min-height: 86vh;
  ${ media.pc`
    display: flex;
    justify-content: center;
    margin: 16px 0;
  `}
`

const PostWrapper = styled.div`
  background-color: ${ colors.white };
  padding: 16px;
  ${ media.pc`
    width: 800px;
    padding: 32px;
  `}
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 8px;
  ${ media.tablet`
    font-size: 3rem;
  `}
  ${ media.pc`
    font-size: 3rem;
  `}
`

const PublishedAt = styled.p`
  color: ${ colors.gray };
  font-size: 1.6rem;
  margin-bottom: 8px;
  ${ media.pc`
    font-size: 2rem;
  `}
`

const Description = styled.div`
  font-size: 1rem;
`

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-bottom: 8px;
  border-bottom: 2px solid ${ colors.gray };
  margin-bottom: 16px;
`

const Tag = styled.li`
  font-size: 1.8rem;
  background-color: ${ colors.lightGray };
  padding: 8px;
  border: 1px solid ${ colors.lightGray };
  border-radius: 8px;
  margin-right: 8px;

  a {
    color: ${ colors.black };
    text-decoration: none;
  }
`

const Content = styled.pre`
`

export default { Container, PostWrapper, Title, PublishedAt,
                 Description, Tags, Tag, Content };
