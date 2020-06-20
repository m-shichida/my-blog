import React from "react";
import styled from "styled-components";

import { colors } from "../helpers/styleHelper";

const Footer = () => {
  return <SCFooter />;
};

const SCFooter = styled.footer`
  background-color: ${colors.black};
  height: 40px;
  margin-top: 24px;
  text-align: center;
`;

export default Footer;
