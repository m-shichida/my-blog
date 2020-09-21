import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import { Segment, Header } from "semantic-ui-react";

import List from "../atoms/MarkDown/List";
import Heading2 from "../atoms/MarkDown/Heading2";
import { mediaTabletL, mediaPhone } from "../../helpers/styleHelper";

const ExperienceCard = ({
  title,
  experiences,
}: {
  title: string;
  experiences: {
    name: string;
    period?: string;
    description: string;
  }[];
}) => {
  return (
    <SCContainer>
      <Segment>
        <Title>{title}</Title>
        {experiences.map((experience, i) => (
          <React.Fragment key={i}>
            <SCHeader>
              <Title>{experience.name}</Title>
              {experience.period ? <Title>{experience.period}</Title> : ""}
            </SCHeader>
            <SCDescription>{renderAst(experience.description)}</SCDescription>
          </React.Fragment>
        ))}
      </Segment>
    </SCContainer>
  );
};

const SCContainer = styled.div`
  max-width: 808px;
`;

const SCHeader = styled.div`
  display: flex;
  justify-content: space-between;

  ${mediaPhone`
    display: block;
  `}
`;

const SCDescription = styled.div``;

const Content = styled.pre`
  font-size: 1rem;
  line-height: 1.8rem;
`;

const Title = styled(Header)`
  margin: 8px 0 !important;

  ${mediaTabletL`
    font-size: 1.6rem;
    line-height: 1.8rem;
  `}

  ${mediaPhone`
    font-size: 1.2rem;
    line-height: 2.4rem;
  `}
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h3: Heading2,
    p: Content,
    li: List,
  },
}).Compiler;

export default ExperienceCard;
