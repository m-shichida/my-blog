import React from "react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import { graphql } from "gatsby";

import SEO from "../../components/seo"; // <SEO />
import Header from "../../components/Header";
import TopTags from "../../components/TopTags";
import PostCard from "../../components/PostCard";
import Footer from "../../components/Footer";

const Tags = ({ pageContext, data }: { data: any; pageContext: any }) => {
  const { tag } = pageContext;
  const posts = data.allContentfulPost.group.filter(
    (post: any) => post.fieldValue === tag
  );

  return (
    <>
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
      <Footer />
    </>
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
          description
          slug
          publishedAt(formatString: "YYYY/MM/DD")
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

const SCTagsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
`;

const SCPostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1230px;
  margin: 0 auto;
  margin-top: 8px;
`;

export default Tags;
