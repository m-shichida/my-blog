import React from "react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import { Header as Title, Image } from "semantic-ui-react";
import SEO from "../components/seo";

import NotFound from "../images/not_found.svg";
import Header from "../components/Header";

const NotFoundPage = () => (
  <>
    <Header />
    <SCContainer>
      <SCTitle as="h1">404: NOT FOUND</SCTitle>
      <SCContent>お探しのページは見つかりませんでした。</SCContent>
      <Image src={NotFound} size="large" />
    </SCContainer>
  </>
);

{
  /* <SEO title="404: Not found" /> */
}

const SCContainer = styled.div`
  width: 400px;
  margin: 40px auto;
`;

const SCTitle = styled(Title)`
  font-size: 2.2rem;
`;

const SCContent = styled.p`
  font-size: 1.2rem;
`;

export default NotFoundPage;
