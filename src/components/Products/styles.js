import styled from 'styled-components';
import { Container } from '@material-ui/core';

const ProductsContainer = styled(Container)`
  color: #4B4B4B;
  height: 100vh;
  padding-top: 32px;
`

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  text-decoration: underline
`

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 32px;
`

const CardImage = styled.img`
`

export default { ProductsContainer, Title, CardWrapper, CardImage };
