import styled from 'styled-components';
import { colors } from '../../helpers/styleHelper';

const FooterContainer = styled.footer`
  color: ${ colors.white };
  font-size: 16px;
  height: 25px;
  text-align: center;
  background: #2992B9;
  background: -webkit-linear-gradient(to right, #6994BF, #2992B9);
  background: linear-gradient(to right, #6994BF, #2992B9);
`

export default { FooterContainer };
