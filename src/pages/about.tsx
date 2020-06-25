import React from "react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import { graphql } from "gatsby";

import Header from "../components/Header";
import Github from "../components/GithubGlasses";
import Profile from "../components/Profile";
import CompanyExperience from "../components/CompanyExperience";
import Skills from "../components/Skills";
import Learnings from "../components/Learnings";

const Blog = ({ data }: { data: any }) => {
  const companies = data.allContentfulCompanyExperience.edges.map(
    (company: any, _i: number) => ({
      companyName: company.node.companyName,
      companyPeriod: company.node.companyPeriod,
      companyDescription:
        company.node.companyDescription.childMarkdownRemark.htmlAst,
    })
  );
  const skills = data.allContentfulWorkExperience.edges.map(
    (skill: any, _i: number) => ({
      language: skill.node.language,
      description: skill.node.description.childMarkdownRemark.htmlAst,
    })
  );
  const learnings = data.allContentfulLearningLanguage.edges.map(
    (learn: any, _i: number) => ({
      language: learn.node.language,
      description: learn.node.description.childMarkdownRemark.htmlAst,
    })
  );

  return (
    <SCWrapper>
      <Header />
      <Github />
      <Profile />
      <CompanyExperience companies={companies} />
      <Skills skills={skills} />
      <Learnings learnings={learnings} />
    </SCWrapper>
  );
};

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
`;

const SCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export default Blog;
