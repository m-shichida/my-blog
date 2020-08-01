import React from "react";
import styled from "styled-components";
import { Header } from "semantic-ui-react";

import { colors } from "../../../helpers/styleHelper";

const Title = ({ text }: { text: string }) => {
  return <SCTitle as="h1">{text}</SCTitle>;
};

const SCTitle = styled(Header)`
  color: ${colors.white};
`;

export default Title;
