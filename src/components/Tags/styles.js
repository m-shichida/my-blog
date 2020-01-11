import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors, media } from '../../helpers/styleHelper';

const Container = styled.article`
  width: 90vw;
  margin: 0 auto;
  margin-top: 24px;
  ${ media.pc`
    width: 1024px;
  `}
`

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 2px solid ${ colors.black };
  margin-bottom: 4px;
  ${ media.pc`
    font-size: 2.6rem;
  `}
`

const TagList = styled.ul`
  font-size: 1.6rem;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

const Tag = styled.li`
  background-color: ${ colors.black };
  padding: 5px;
  border: 1px solid ${ colors.black };
  border-radius: 4px;
  margin: 4px;
`

const TagLink = styled(Link)`
  color: ${ colors.white };
  text-decoration: none;
`

const Badge = styled.span`
  color: ${ colors.black };
  background-color: ${ colors.white };
  margin-left: 4px;
  border: 1px solid ${ colors.white };
  border-radius: 4px;
  padding: 2px;
`

export default { Container, Title, TagList, Tag, TagLink, Badge }
