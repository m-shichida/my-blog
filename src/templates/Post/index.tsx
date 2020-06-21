import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { Label, Header as Title } from "semantic-ui-react";

import PostToc from "../../components/PostToc";
import SEO from "../../components/seo";
import Share from "../../components/Share";
import { media, colors } from "../../helpers/styleHelper";
import "./post.scss";

import Header from "../../components/Header";

const Post = ({ data }: { data: any }) => {
  const post = data.contentfulPost;
  const contentHtml = post.content.childMarkdownRemark.htmlAst;
  const toc = post.content.childMarkdownRemark.tableOfContents;
  const url = `https://shicchi-blog.com/blog/${post.slug}`;
  const image = `https:${post.titleImage.file.url}`;

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        url={url}
        image={image}
      />
      <Header />
      <Container>
        <PostContainer>
          <Title as="h1">{post.title}</Title>
          <SCTags>
            {post.tags.map((tag: string, i: number) => {
              return (
                <Label as="a" tag key={i}>
                  <Link to={`/tags/${tag}`}>{tag}</Link>
                </Label>
              );
            })}
          </SCTags>
          <SCCreatedAt color="blue" style={{ marginTop: "8px" }}>
            {post.publishedAt}
          </SCCreatedAt>
          <SCContent className="blog-content">
            {renderAst(contentHtml)}
          </SCContent>
          <Share
            title={post.title}
            tags={post.tags}
            url={url}
            description={post.description}
          />
        </PostContainer>
        <PostToc toc={toc} />
      </Container>
    </>
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
      publishedAt(formatString: "YYYY/MM/DD")
      content {
        childMarkdownRemark {
          htmlAst
          tableOfContents(absolute: false)
        }
      }
      description
      tags
      slug
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;

  ${media.pc`
    display: flex;
    justify-content: center;
    margin: 0 auto;
  `}
`;

const PostContainer = styled.div`
  max-width: 800px;
  padding-top: 24px;
`;

const SCCreatedAt = styled(Label)``;

const SCContent = styled.div``;

const SCTags = styled.ul``;

const Content = styled.pre``;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: Content,
  },
}).Compiler;

export default Post;
