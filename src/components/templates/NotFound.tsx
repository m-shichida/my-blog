import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

import NotFound from "../../images/not_found.svg";
import Header from "../organisms/Header";
import Title from "../atoms/Text/Title";
import SubTitle from "../atoms/Text/SubTitle";
import { colors } from "../../helpers/styleHelper";

const NotFoundTemplate = () => {
  return (
    <SCContainer>
      <Header />
      <Title text="404: NOT FOUND" />
      <SubTitle
        text="お探しのページは見つかりませんでした。"
        color={colors.black}
      />
      <Image src={NotFound} size="large" />
    </SCContainer>
  );
};

const SCContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export default NotFoundTemplate;
