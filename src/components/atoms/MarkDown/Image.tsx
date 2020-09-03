import React from "react";
import styled from "styled-components";

const Image = ({ src }: { src: string }) => {
  return <ExpandImage src={src} />;
};

const ExpandImage = styled.img`
  display: block;
  margin: 24px auto !important;
  width: 98%;
`;

export default Image;
