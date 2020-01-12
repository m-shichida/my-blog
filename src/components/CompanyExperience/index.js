import React from 'react'
import styles from './styles';
import rehypeReact from "rehype-react"

const { Container, Title, Company, CompanyHeader, CompanyName, CompanyPeriod,
        CompanyDescription, Content } = styles;

const CompanyExperience = ({ companyExperienceEdges }) => {
  return (
    <Container>
      <Title>職歴</Title>
      { companyExperienceEdges.map((edge, index) => {
        return(
          <Company key={ index }>
            <CompanyHeader>
              <CompanyName>{ edge.node.companyName }</CompanyName>
              <CompanyPeriod>{ edge.node.companyPeriod }</CompanyPeriod>
            </CompanyHeader>
            <CompanyDescription>
              { renderAst(edge.node.companyDescription.childMarkdownRemark.htmlAst) }
            </CompanyDescription>
          </Company>
        )
      }) }
    </Container>
  )
}

export default CompanyExperience;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'p' : Content
  },
}).Compiler
