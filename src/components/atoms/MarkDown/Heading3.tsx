import React from "react";
import styled from "styled-components";

import { mediaPc } from "../../../helpers/styleHelper";

const Heading3 = ({ children }: { children?: any }) => {
  return (
    // マークダウンでchildren[1]で送られてくる
    <Text id={children[1]}>{children[1]}</Text>
  );
};

const Text = styled.h2`
  color: #333333;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: solid 3px #eeeeee;
  position: relative;
  margin: 40px 0 !important;
  padding-bottom: 16px;

  &:after {
    content: "";
    position: absolute;
    width: 64px;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: #2ea44f;
  }

  ${mediaPc`
    font-size: 1.8rem;
  `}
`;

export default Heading3;
