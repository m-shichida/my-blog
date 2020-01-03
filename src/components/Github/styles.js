import styled from 'styled-components';
import { media } from '../../helpers/styleHelper'

const GithubLink = styled.a`
  display: block;
  margin: 24px 0;
  text-align: center;
  ${ media.phone`
    display: none;
  `}
`

export default { GithubLink };
