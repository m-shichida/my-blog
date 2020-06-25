import React from "react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import { graphql } from "gatsby";

import SEO from "../../components/seo"; // <SEO />
import Header from "../../components/Header";
import TopTags from "../../components/TopTags";
import PostCard from "../../components/PostCard";
import { mediaTablet, mediaPhone } from "../../helpers/styleHelper";

const Tags = ({ pageContext, data }: { data: any; pageContext: any }) => {
  const { tag } = pageContext;
  const posts = data.allContentfulPost.group.filter(
    (post: any) => post.fieldValue === tag
  );

  return (
    <SCWrapper>
      <Header />
      <SCTagsContainer>
        <TopTags tags={data.allContentfulPost.group} />
      </SCTagsContainer>
      <SCPostContainer>
        {posts.map((data: any, _i: number) =>
          data.nodes.map((post: any, i: number) => (
            <PostCard
              key={i}
              slug={post.slug}
              titleImage={post.titleImage.file.url}
              title={post.title}
              createdAt={post.createdAt}
              tags={post.tags}
            />
          ))
        )}
      </SCPostContainer>
    </SCWrapper>
  );
};

export const pageQuery = graphql`
  query {
    allContentfulPost {
      group(field: tags) {
        fieldValue
        totalCount
        nodes {
          content {
            childMarkdownRemark {
              html
            }
          }
          slug
          createdAt(formatString: "YYYY/MM/DD")
          tags
          title
          titleImage {
            file {
              url
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

const SCTagsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  ${mediaTablet`
    max-width: 768px;
  `}
  ${mediaPhone`
    max-width: 320px;
  `}
`;

const SCPostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1230px;
  margin: 0 auto;
  margin-top: 8px;
  ${mediaTablet`
    max-width: 768px;
  `}
  ${mediaPhone`
    max-width: 320px;
  `}
`;

export default Tags;
