import React from "react";
import "semantic-ui-css/semantic.min.css";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import AboutTemplate from "../components/templates/About";

const About = ({ data }: { data: any }) => {
  const companies = data.allContentfulCompanyExperience.edges.map(
    (company: any, _i: number) => ({
      name: company.node.name,
      period: company.node.period,
      description: company.node.description.childMarkdownRemark.htmlAst,
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
      <AboutTemplate companies={companies} learnings={learnings} />
    </>
  );
};

export const query = graphql`
  {
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
