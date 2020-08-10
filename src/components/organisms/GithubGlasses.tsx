import React from "react";
import styled from "styled-components";
import { mediaTabletL, mediaPhone } from "../../helpers/styleHelper";

const GithubGlasses = () => {
  return (
    <SCGithubLink
      href="https://github.com/m-shichida"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://grass-graph.moshimo.works/images/m-shichida.png"
        alt="github Contribution Graph"
      />
    </SCGithubLink>
  );
};

const SCGithubLink = styled.a`
  display: block;
  margin: 16px 0;
  padding-left: 40px;
  text-align: center;
  ${mediaTabletL`
    display: none;
  `}
  ${mediaPhone`
    display: none;
  `}
`;

export default GithubGlasses;
