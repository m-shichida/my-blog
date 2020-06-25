import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import { Segment, Header as Title } from "semantic-ui-react";

import { colors } from "../helpers/styleHelper";
import { mediaTablet, mediaPhone } from "../helpers/styleHelper";

type Props = {
  companies: {
    companyName: string;
    companyPeriod: string;
    companyDescription: string;
  }[];
};

const CompanyExperience = (props: Props) => {
  const { companies } = props;

  return (
    <SCContainer>
      <Segment>
        <SCTitle as="h2">職歴</SCTitle>
        {companies.map((company, i) => (
          <SCCompany key={i}>
            <SCHeader>
              <SCName>{company.companyName}</SCName>
              <SCPeriod>{company.companyPeriod}</SCPeriod>
            </SCHeader>
            <SCDescription>
              {renderAst(company.companyDescription)}
            </SCDescription>
          </SCCompany>
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

const SCTitle = styled(Title)`
  ${mediaTablet`
    font-size: 1.4rem;
  `}
  ${mediaPhone`
    font-size: 1.4rem;
  `}
`;

const SCCompany = styled.div`
  margin-top: 16px;
  ${mediaPhone`
    margin-top: 8px;
  `}
`;

const SCHeader = styled.div`
  display: flex;
  justify-content: space-between;

  ${mediaPhone`
    display: block;
  `}
`;

const SCName = styled.h3`
  margin: 0;
  ${mediaTablet`
    font-size: 1rem;
  `}
  ${mediaPhone`
    font-size: 1.2rem;
  `}
`;

const SCPeriod = styled.h3`
  margin: 0;
  ${mediaTablet`
    font-size: 1rem;
  `}
  ${mediaPhone`
    font-size: 1.2rem;
    margin-top: 4px;
  `}
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

export default CompanyExperience;
