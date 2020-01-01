import React from 'react';
import styles from './styles';
import Portfolio from './port-folio.png'
import { Card, CardActionArea,
         CardContent, Typography } from '@material-ui/core';

const { ProductsContainer, Title, CardWrapper, CardImage } = styles;

const Products = () => {
  return (
    <ProductsContainer id='products'>
      <Title>Products</Title>
      <CardWrapper>
        <Card style={ { width: '290px' } }>
          <CardActionArea>
            <CardImage
              src={ Portfolio }
            />
            <CardContent>
              <Typography>ポートフォリオサイト兼ブログ</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                GatsbyJs + Contentful + Netfilyを使って作成したサイトです。
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </CardWrapper>
    </ProductsContainer>
  )
}

export default Products;
