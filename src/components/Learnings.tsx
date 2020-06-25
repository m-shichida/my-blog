import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import { Segment, Header as Title } from "semantic-ui-react";

import { colors } from "../helpers/styleHelper";
import { mediaTablet, mediaPhone } from "../helpers/styleHelper";

type Props = {
  learnings: {
    language: string;
    description: string;
  }[];
};

const Learnings = (props: Props) => {
  const { learnings } = props;

  return (
    <SCContainer>
      <Segment>
        <SCTitle as="h2">勉強中</SCTitle>
        {learnings.map((learn, i) => (
          <SCSkill key={i}>
            <SCHeader>
              <SCName>{learn.language}</SCName>
            </SCHeader>
            <SCDescription>{renderAst(learn.description)}</SCDescription>
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
  ${mediaPhone`
    margin-top: 8px;
  `}
`;

const SCTitle = styled(Title)`
  ${mediaTablet`
    font-size: 1.4rem;
  `}
  ${mediaPhone`
    font-size: 1.4rem;
  `}
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
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: Content,
  },
}).Compiler;

export default Learnings;
