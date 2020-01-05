import styled from 'styled-components';
import { colors } from '../../helpers/styleHelper';

const Container = styled.article`

`

const TocList = styled.section`
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  & ul {
    list-style: none;
  }
  & li {
    padding-left: 16px;
  }
  & a {
    display: block;
    color: ${ colors.black };
    font-size: 1.4rem;
    text-decoration: none;
    padding: 4px;
  }
  & a:hover {
    background-color: ${ colors.lightGray };
    text-decoration: underline;
  }
`

export default { Container, TocList };