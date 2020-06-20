import React from "react";
import "semantic-ui-css/semantic.min.css";
import { graphql } from "gatsby";

import Header from "../components/Header";
import Github from "../components/GithubGlasses";
import CompanyExperience from "../components/CompanyExperience";
import Skills from "../components/Skills";

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
    <>
      <Header />
      <Github />
      <CompanyExperience companies={companies} />
      <Skills skills={skills} />
    </>
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

export default Blog;
