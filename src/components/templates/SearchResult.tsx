import React from "react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import { graphql } from "gatsby";

import SEO from "../../components/seo"; // <SEO />
import Header from "../../components/organisms/Header";
import PostTags from "../../components/organisms/PostTags";
import PostCard from "../../components/organisms/PostCard";
import Profile from "../../components/organisms/Profile";
import {
  mediaPc,
  mediaTabletL,
  mediaTablet,
  mediaPhone,
} from "../../helpers/styleHelper";

const Tags = ({ pageContext, data }: { data: any; pageContext: any }) => {
  const tags = data.allContentfulPost.group;
  const posts = data.allContentfulPost.group
    .filter((post: any) => post.fieldValue === pageContext.tag)[0]
    .nodes.map((data: any) => ({
      slug: data.slug,
      titleImage: data.titleImage.file.url,
      title: data.title,
      createdAt: data.createdAt,
    }));

  return (
    <>
      <SEO title={`検索結果: ${pageContext.tag.fieldValue}`} />
      <Header />
      <SCContainer>
        <SCContentWrapper>
          <SCCardWrapper>
            {posts.map((post: any, i: number) => (
              <PostCard
                key={i}
                slug={post.slug}
                titleImage={post.titleImage}
                title={post.title}
                createdAt={post.createdAt}
              />
            ))}
          </SCCardWrapper>
          <Profile />
        </SCContentWrapper>
        <PostTags tags={tags} />
      </SCContainer>
    </>
  );
};

const SCContainer = styled.div`
  ${mediaTabletL`
    padding: 8px;
  `}
  ${mediaPc`
    width: 1080px;
    margin: 0 auto;
    padding-top: 8px;
    padding-bottom: 32px;
  `}
`;

const SCContentWrapper = styled.div`
  ${mediaPc`
    display: flex;
    justify-content: space-between;
  `}
`;

const SCCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &:after {
    content: "";
    display: block;
    width: 30%;
  }

  ${mediaPc`
    width: 808px;
    .post-card:nth-child(n + 4) {
      margin-top: 8px;
    }
  `}
  ${mediaTabletL`
    .post-card:nth-child(n + 5) {
      margin-top: 8px;
    }
    &:after {
      content: "";
      display: block;
      width: 50%;
    }
  `}
  ${mediaTablet`
    .post-card:nth-child(n + 4) {
      margin-top: 8px;
    }
    &:after {
      content: "";
      display: block;
      width: 50%;
    }
  `}
  ${mediaPhone`
    justify-content: space-around;
    .post-card:nth-child(n + 3) {
      margin-top: 8px;
    }
  `}
`;

export const pageQuery = graphql`
  query {
    allContentfulPost(sort: {fields: createdAt, order: DESC}) {
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

export default Tags;
