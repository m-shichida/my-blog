import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { Label, Header as Title } from "semantic-ui-react";

import PostToc from "../../components/PostToc";
import SEO from "../../components/seo";
import PostShare from "../../components/PostShare";
import "./post.scss";

import Header from "../../components/Header";
import { mediaTablet, mediaPhone } from "../../helpers/styleHelper";

const Post = ({ data }: { data: any }) => {
  const post = data.contentfulPost;
  const contentHtml = post.content.childMarkdownRemark.htmlAst;
  const toc = post.content.childMarkdownRemark.tableOfContents;
  const url = `https://shicchi-blog.com/blog/${post.slug}`;
  const image = `https:${post.titleImage.file.url}`;

  return (
    <SCWrapper>
      <SEO title={post.title} url={url} image={image} />
      <Header />
      <Container>
        <PostContainer>
          <SCTitle as="h1">{post.title}</SCTitle>
          <SCTags>
            {post.tags.map((tag: string, i: number) => {
              return (
                <Label as={Link} tag key={i} to={`/tags/${tag}`}>
                  {tag}
                </Label>
              );
            })}
          </SCTags>
          <SCCreatedAt color="blue" style={{ marginTop: "8px" }}>
            {post.createdAt}
          </SCCreatedAt>
          <SCContent className="blog-content">
            {renderAst(contentHtml)}
          </SCContent>
          <PostShare title={post.title} url={url} />
        </PostContainer>
        <PostToc toc={toc} />
      </Container>
    </SCWrapper>
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

const SCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  ${mediaTablet`
    max-width: 752px;
  `}
  ${mediaPhone`
    max-width: 304px;
  `}
`;

const PostContainer = styled.div`
  max-width: 800px;
  padding-top: 24px;
  ${mediaTablet`
    max-width: 752px;
  `}
  ${mediaPhone`
    max-width: 304px;
  `}
`;

const SCTitle = styled(Title)`
  ${mediaTablet`
    font-size: 1.4rem;
  `}
  ${mediaPhone`
    font-size: 1.2rem;
  `}
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
