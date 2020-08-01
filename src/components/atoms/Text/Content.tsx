import React from "react";
import styled from "styled-components";

const Content = ({ text }: { text: string }) => {
  return <SCContent>{text}</SCContent>;
};

const SCContent = styled.p`
  font-size: 2.2rem;
`;

export default Content;
