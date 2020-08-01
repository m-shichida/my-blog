import React from "react";
import styled from "styled-components";

import Header from "../organisms/Header";
import GithubGlasses from "../organisms/GithubGlasses";
import Profile from "../organisms/Profile";

const About = () => {
  return (
    <>
      <Header />
      <SCContainer>
        <GithubGlasses />
        <Profile />
      </SCContainer>
    </>
  );
};

const SCContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export default About;
