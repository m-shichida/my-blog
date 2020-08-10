import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Header from "../organisms/Header";
import PostToc from "../organisms/PostToc";
import SEO from "../../components/seo";
import PostDetail from "../organisms/PostDetail";

const Post = ({ data }: { data: any }) => {
  const post = data.contentfulPost;
  const toc = post.content.childMarkdownRemark.tableOfContents;
  const url = `https://shicchi-blog.com/blog/${post.slug}`;
  const image = `https:${post.titleImage.file.url}`;

  return (
    <div style={{ background: "#f3f3f3" }}>
      <SEO title={post.title} url={url} image={image} />
      <Header />
      <SCPostContenainer>
        <PostDetail post={post} />
        <PostToc toc={toc} />
      </SCPostContenainer>
    </div>
  );
};

const SCPostContenainer = styled.div`
  display: flex;
  width: 1080px;
  margin: 0 auto;
`;

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      titleImage {
        file {
          url
        }
      }
      createdAt(formatString: "YYYY/MM/DD")
      content {
        childMarkdownRemark {
          htmlAst
          tableOfContents(absolute: false)
        }
      }
      tags
      slug
    }
  }
`;

export default Post;
