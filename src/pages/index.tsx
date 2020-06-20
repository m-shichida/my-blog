import React from "react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import { graphql } from "gatsby";

import SEO from "../components/seo"; // <SEO />
import Header from "../components/Header";
import TopTags from "../components/TopTags";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";

const IndexPage = ({ data }: { data: any }) => {
  return (
    <>
      <Header />
      <SCPostContainer>
        {data.allContentfulPost.edges.map((data: any, i: number) => (
          <PostCard
            key={i}
            slug={data.node.slug}
            titleImage={data.node.titleImage.file.url}
            title={data.node.title}
            createdAt={data.node.createdAt}
            tags={data.node.tags}
          />
        ))}
      </SCPostContainer>
      <SCTagsContainer>
        <TopTags tags={data.allContentfulPost.group} />
      </SCTagsContainer>
      <Footer />
    </>
  );
};

export const query = graphql`
  {
    allContentfulPost {
      group(field: tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          createdAt(formatString: "YYYY/MM/DD")
          slug
          title
          tags
          titleImage {
            file {
              url
            }
          }
          content {
            content
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

const SCPostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1230px;
  margin: 0 auto;
  margin-top: 8px;
`;

const SCTagsContainer = styled.div`
  max-width: 1200px;
  margin: 24px auto;
`;

export default IndexPage;
