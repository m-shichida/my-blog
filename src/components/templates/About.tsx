import React from "react";
import styled from "styled-components";
import { List } from "semantic-ui-react";

import Header from "../organisms/Header";
import GithubGlasses from "../organisms/GithubGlasses";
import Profile from "../organisms/Profile";
import ExperienceCard from "../organisms/ExperienceCard";
import { mediaPc, mediaTabletL } from "../../helpers/styleHelper";

const About = ({
  companies,
  learnings,
}: {
  companies: {
    name: string;
    period: string;
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
          <SCList>
            <List.Item>
              <ExperienceCard title="職歴" experiences={companies} />
            </List.Item>
            <List.Item>
              <ExperienceCard title="勉強中言語" experiences={learnings} />
            </List.Item>
          </SCList>
        </SCExpericenceContainer>
      </SCContainer>
    </>
  );
};

const SCContainer = styled.div`
  padding-bottom: 16px;

  ${mediaTabletL`
    padding: 0 8px 8px 8px;
  `}
  ${mediaPc`
    width: 1080px;
    margin: 0 auto;
  `}
`;

const SCExpericenceContainer = styled.div`
  ${mediaPc`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  `}
`;

const SCList = styled(List)`
  margin-top: 8px !important;

  ${mediaPc`
    margin-top: 0px !important;
  `}
`;

export default About;
