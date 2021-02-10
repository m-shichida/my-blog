import React from "react";
import styled from "styled-components";

import { mediaPc } from "../../../helpers/styleHelper";

const Heading1 = ({ children }: { children?: any }) => {
  return (
    // マークダウンでchildren[1]で送られてくる
    <Text id={children[1].toLowerCase().replace(/[/.]/g, "")}>
      {children[1]}
    </Text>
  );
};

const Text = styled.h2`
  color: #333333;
  line-height: 20px;
  font-size: 1rem;
  margin: 24px 0 32px 0;
  padding-left: 16px;
  font-weight: bold;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 4px;
    position: absolute;
    left: 0;
    top: 1px;
    bottom: 1px;
    background: #2ea44f;
  }

  ${mediaPc`
    font-size: 1.6rem;
    line-height: 32px;
    margin: 32px 0 40px 0;
  `}
`;

export default Heading1;
