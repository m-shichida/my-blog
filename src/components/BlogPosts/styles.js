import styled from 'styled-components';
import { media } from '../../helpers/styleHelper';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  margin: 24px auto;
  ${ media.tablet`
    min-height: 60vh;
    width: 752px;
  ` }
`

export default { Container };
