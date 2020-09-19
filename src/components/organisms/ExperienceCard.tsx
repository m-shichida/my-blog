import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import { Segment } from "semantic-ui-react";

import List from "../atoms/MarkDown/List";
import Title from "../atoms/Text/Heading";
import { colors } from "../../helpers/styleHelper";
import { mediaPhone } from "../../helpers/styleHelper";

const CompanyExperience = ({
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
        <Title text={title} color={colors.black} />
        {experiences.map((experience, i) => (
          <React.Fragment key={i}>
            <SCHeader>
              <Title text={experience.name} color={colors.black} />
              {experience.period ? (
                <Title text={experience.period} color={colors.black} />
              ) : (
                ""
              )}
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
  color: ${colors.gray};
  font-size: 1rem;
  line-height: 1.8rem;
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: Content,
    li: List,
  },
}).Compiler;

export default CompanyExperience;
