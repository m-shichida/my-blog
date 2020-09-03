import React from "react";
import styled from "styled-components";
import { Header } from "semantic-ui-react";

import { colors, mediaTabletL, mediaPhone } from "../../../helpers/styleHelper";

const Title = ({ text, color }: { text: string; color?: string }) => {
  return (
    <SCHeader as="h1" style={{ color: color || colors.white }}>
      {text}
    </SCHeader>
  );
};

const SCHeader = styled(Header)`
  ${mediaTabletL`
    font-size: 1.8rem;
    line-height: 3.6rem;
  `}
  ${mediaPhone`
    font-size: 1.4rem;
    line-height: 2rem;
  `}
`;

export default Title;
