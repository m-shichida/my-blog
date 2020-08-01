import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import { graphql } from "gatsby";

import PostToc from "../../components/PostToc";
import SEO from "../../components/seo";
import PostShare from "../../components/PostShare";
import "../../helpers/postContent.scss";

import Header from "../../components/organisms/Header";
import Title from "../../components/atoms/Text/Title";
import Tag from "../../components/atoms/Label/Tag";
import { mediaTablet, mediaPhone } from "../../helpers/styleHelper";

const Post = ({ data }: { data: any }) => {
  const post = data.contentfulPost;
  const contentHtml = post.content.childMarkdownRemark.htmlAst;
  const toc = post.content.childMarkdownRemark.tableOfContents;
  const url = `https://shicchi-blog.com/blog/${post.slug}`;
  const image = `https:${post.titleImage.file.url}`;

  return (
    <div>
      <SEO title={post.title} url={url} image={image} />
      <Header />
      <div>
        <div>
          <Title text={post.title} />
          {post.tags.map((text: string, i: number) => (
            <Tag text={text} />
          ))}
          <Tag text={post.createdAt} />
          <div className="blog-content">{renderAst(contentHtml)}</div>
          <PostShare title={post.title} url={url} />
        </div>
        <PostToc toc={toc} />
      </div>
    </div>
  );
};

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

const Content = styled.pre``;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: Content,
  },
}).Compiler;

export default Post;
