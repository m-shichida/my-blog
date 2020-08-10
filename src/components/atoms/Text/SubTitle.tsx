import React from "react";
import styled from "styled-components";
import { Header } from "semantic-ui-react";

import { colors, mediaTablet, mediaPhone } from "../../../helpers/styleHelper";

const SubTitle = ({ text, color }: { text: string; color?: string }) => {
  return (
    <SCHeader as="h2" style={{ color: color || colors.white }}>
      {text}
    </SCHeader>
  );
};

const SCHeader = styled(Header)`
  ${mediaTablet`
    font-size: 1.6rem;
  `}
  ${mediaPhone`
    font-size: 1.2rem;
  `}
`;

export default SubTitle;
