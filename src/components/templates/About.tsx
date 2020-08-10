import React from "react";
import styled from "styled-components";
import { List } from "semantic-ui-react";

import Header from "../organisms/Header";
import GithubGlasses from "../organisms/GithubGlasses";
import Profile from "../organisms/Profile";
import ExperienceCard from "../organisms/ExperienceCard";

const About = ({
  companies,
  skills,
  learnings,
}: {
  companies: {
    name: string;
    period: string;
    description: string;
  }[];
  skills: {
    name: string;
    description: string;
  }[];
  learnings: {
    name: string;
    description: string;
  }[];
}) => {
  return (
    <>
      <Header />
      <SCContainer>
        <GithubGlasses />
        <SCExpericenceContainer>
          <Profile />
          <List style={{ margin: "0" }}>
            <List.Item>
              <ExperienceCard title="職歴" experiences={companies} />
            </List.Item>
            <List.Item>
              <ExperienceCard title="言語スキル" experiences={skills} />
            </List.Item>
            <List.Item>
              <ExperienceCard title="勉強中言語" experiences={learnings} />
            </List.Item>
          </List>
        </SCExpericenceContainer>
      </SCContainer>
    </>
  );
};

const SCContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding-bottom: 32px;
`;

const SCExpericenceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

export default About;
