import React from "react";
import Layout from "../components/Layout";
import Github from "../components/Github";
import CompanyExperience from '../components/CompanyExperience';
import Profile from '../components/Profile';
import WorkExperience from "../components/WorkExperience";
import styled from 'styled-components';
import SEO from "../components/seo"
import { media } from '../helpers/styleHelper';
import { graphql } from 'gatsby'

const Blog = ({ data }) => {
  return (
    <>
      <Layout>
        <Container>
          <SEO title="About" description='Railsエンジニアの技術ブログです。実務のテクニック垂れ流していきます。'/>
          <Github />
          <Flex>
            <CompanyExperience
              companyExperienceEdges={ data.allContentfulCompanyExperience.edges }
            />
            <Profile />
          </Flex>
          <WorkExperience
            workExperienceEdges={ data.allContentfulWorkExperience.edges }
            learningLanguageEdges={ data.allContentfulLearningLanguage.edges }
          />
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allContentfulWorkExperience {
      edges {
        node {
          language
          description {
            childMarkdownRemark {
              htmlAst
            }
          }
        }
      }
    }
    allContentfulLearningLanguage {
      edges {
        node {
          language
          description {
            childMarkdownRemark {
              htmlAst
            }
          }
        }
      }
    }
    allContentfulCompanyExperience {
      edges {
        node {
          companyName
          companyPeriod
          companyDescription {
            childMarkdownRemark {
              htmlAst
            }
          }
        }
      }
    }
  }
`

export default Blog;

const Container = styled.section`
  color: #4B4B4B;
  font-family: Arial, Helvetica, ‘游ゴシック’, ‘Yu Gothic’, YuGothic, HiraKakuProN-W3, ‘メイリオ’, Meiryo, sans-serif;
  min-height: 85.5vh;
  background-color: #F5F5F5;
`

const Flex = styled.section`
  display: flex;
  justify-content: space-around;
  max-width: 1024px;
  margin: 0 auto;
  margin-bottom: 16px;
  ${ media.phone`
    flex-direction: column-reverse;
  `}
  ${ media.tablet`
    flex-direction: column-reverse;
    width: 760px;
  `}
`
