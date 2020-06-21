import React from "react";
import { graphql, Link } from "gatsby";
import rehypeReact from "rehype-react";
import SEO from "../../components/seo";
import Share from "../../components/Share";
import PostToc from "../../components/PostToc";
import styled from "styled-components";
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
        <PostWrapper>
          <PublishedAt>{post.publishedAt}に投稿</PublishedAt>
          <Title>{post.title}</Title>
          <Tags>
            {post.tags.map((tag: any, index: number) => {
              return (
                <Tag key={index}>
                  <Link to={`/tags/${tag}`}>{tag}</Link>
                </Tag>
              );
            })}
          </Tags>
          <Description className="blog-content">
            {renderAst(contentHtml)}
          </Description>
          <Share
            title={post.title}
            tags={post.tags}
            url={url}
            description={post.description}
          />
        </PostWrapper>
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

const Container = styled.article`
  min-height: 86vh;
  max-width: 1200px;
  margin: 0 auto;

  ${media.pc`
    display: flex;
    justify-content: center;
    margin: 16px 0;
  `}
`;

const PostWrapper = styled.div`
  background-color: ${colors.white};
  padding: 16px;
  ${media.pc`
    width: 800px;
    padding: 32px;
  `}
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 8px;
  ${media.tablet`
    font-size: 3rem;
  `}
  ${media.pc`
    font-size: 3rem;
  `}
`;

const PublishedAt = styled.p`
  color: ${colors.gray};
  font-size: 1.6rem;
  margin-bottom: 8px;
  ${media.pc`
    font-size: 2rem;
  `}
`;

const Description = styled.div`
  font-size: 1rem;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-bottom: 8px;
  border-bottom: 2px solid ${colors.gray};
  margin-bottom: 16px;
`;

const Tag = styled.li`
  font-size: 1.8rem;
  background-color: ${colors.lightGray};
  padding: 8px;
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
  margin-right: 8px;

  a {
    color: ${colors.black};
    text-decoration: none;
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
