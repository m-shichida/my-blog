import React from "react";
import "semantic-ui-css/semantic.min.css";
import { graphql } from "gatsby";

import Header from "../components/Header";
import Github from "../components/GithubGlasses";
import CompanyExperience from "../components/CompanyExperience";

const Blog = ({ data }: { data: any }) => {
  const companies = data.allContentfulCompanyExperience.edges.map(
    (company: any, _i: number) => ({
      companyName: company.node.companyName,
      companyPeriod: company.node.companyPeriod,
      companyDescription:
        company.node.companyDescription.childMarkdownRemark.htmlAst,
    })
  );

  return (
    <>
      <Header />
      <Github />
      <CompanyExperience companies={companies} />
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

// const Container = styled.section`
//   color: #4b4b4b;
//   font-family: Arial, Helvetica, ‘游ゴシック’, ‘Yu Gothic’, YuGothic,
//     HiraKakuProN-W3, ‘メイリオ’, Meiryo, sans-serif;
//   min-height: 85.5vh;
//   background-color: #f5f5f5;
// `;

// const Flex = styled.section`
//   display: flex;
//   justify-content: space-around;
//   max-width: 1024px;
//   margin: 0 auto;
//   margin-bottom: 16px;
//   ${media.phone`
//     flex-direction: column-reverse;
//   `}
//   ${media.tablet`
//     flex-direction: column-reverse;
//     width: 760px;
//   `}
// `;

export default Blog;
