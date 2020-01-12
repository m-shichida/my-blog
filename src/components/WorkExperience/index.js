import React from 'react';
import styles from './styles';
import rehypeReact from "rehype-react"

const { Container, Title, ExperienceTitle, ExperienceDescription, Content } = styles;

const WorkExperience = ({ workExperienceEdges, learningLanguageEdges }) => {
  return (
    <Container>
      <div style={ { marginBottom: '16px' } }>
      <Title>スキル</Title>
      { workExperienceEdges.map((edge, index) => {
        return (
          <div key={ index }>
            <ExperienceTitle>{ edge.node.language }</ExperienceTitle>
            <ExperienceDescription>
              { renderAst(edge.node.description.childMarkdownRemark.htmlAst) }
            </ExperienceDescription>
          </div>
        )
      }) }
      </div>
      <Title>勉強中</Title>
      { learningLanguageEdges.map((edge, index) => {
        return (
          <div key={ index }>
            <ExperienceTitle>{ edge.node.language }</ExperienceTitle>
            <ExperienceDescription>
              { renderAst(edge.node.description.childMarkdownRemark.htmlAst) }
            </ExperienceDescription>
          </div>
        )
      }) }
    </Container>
  )
}

export default WorkExperience;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'p': Content
  },
}).Compiler
