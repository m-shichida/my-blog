import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import { Segment, Header as Title } from "semantic-ui-react";

import { colors, media } from "../helpers/styleHelper";

type Props = {
  skills: {
    language: string;
    description: string;
  }[];
};

const Skills = (props: Props) => {
  const { skills } = props;

  return (
    <SCContainer>
      <Segment>
        <Title as="h2">スキル</Title>
        {skills.map((skill, i) => (
          <SCSkill key={i}>
            <SCHeader>
              <SCName>{skill.language}</SCName>
            </SCHeader>
            <SCDescription>{renderAst(skill.description)}</SCDescription>
          </SCSkill>
        ))}
      </Segment>
    </SCContainer>
  );
};

const SCContainer = styled.div`
  max-width: 830px;
  margin: 0 auto;
  margin-top: 8px;
`;

const SCSkill = styled.div`
  margin-top: 16px;
`;

const SCHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SCName = styled.h3`
  margin: 0;
`;

const SCDescription = styled.div`
  margin-top: 4px;
`;

const Content = styled.pre`
  color: ${colors.gray};
  font-size: 1rem;
  line-height: 1.6rem;
  ${media.tablet`
    font-size: 1.6rem;
  `}
  ${media.phone`
    font-size: 1.4rem;
  `}
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: Content,
  },
}).Compiler;

export default Skills;
