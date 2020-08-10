import React from "react";
import "semantic-ui-css/semantic.min.css";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import AbountTemplate from "../components/templates/About";

const About = ({ data }: { data: any }) => {
  console.log(data);
  const companies = data.allContentfulCompanyExperience.edges.map(
    (company: any, _i: number) => ({
      name: company.node.name,
      period: company.node.period,
      description: company.node.description.childMarkdownRemark.htmlAst,
    })
  );
  const skills = data.allContentfulWorkExperience.edges.map(
    (skill: any, _i: number) => ({
      language: skill.node.name,
      description: skill.node.description.childMarkdownRemark.htmlAst,
    })
  );
  const learnings = data.allContentfulLearningLanguage.edges.map(
    (learn: any, _i: number) => ({
      language: learn.node.name,
      description: learn.node.description.childMarkdownRemark.htmlAst,
    })
  );

  return (
    <>
      <SEO title="プロフィール" />
      <AbountTemplate
        companies={companies}
        skills={skills}
        learnings={learnings}
      />
    </>
  );
};

export const query = graphql`
  {
    allContentfulWorkExperience {
      edges {
        node {
          name
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
          name
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
          name
          period
          description {
            childMarkdownRemark {
              htmlAst
            }
          }
        }
      }
    }
  }
`;

export default About;
