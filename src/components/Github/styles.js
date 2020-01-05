import styled from 'styled-components';
import { media } from '../../helpers/styleHelper'

const GithubLink = styled.a`
  display: block;
  margin: 24px 0;
  text-align: center;
  ${ media.phone`
    display: none;
  `}
  ${ media.tablet`
    width: 760px;
    margin 24px auto;
  `}
`

export default { GithubLink };
