import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import NotFound from '../images/not_found.svg';
import styled from 'styled-components';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <SEO title="404: Not found" />
      <Title>404: NOT FOUND</Title>
      <Typography>お探しのページは見つかりませんでした。</Typography>
      <NotFoundImage src={ NotFound } />
    </Container>
  </Layout>
)

export default NotFoundPage

const Container = styled.div`
  height: 90vh;
  max-width: 650px;
  padding: 0 8px;
  padding-top: 15vh;
  margin: 0 auto;
`

const NotFoundImage = styled.img`
`

const Title = styled.h1`
  font-size: 2.2rem;
`

const Typography = styled.p`
  font-size: 1.2rem;
`
