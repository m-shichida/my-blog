import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";

import Title from "../atoms/Text/Title";
import Tag from "../atoms/Label/Tag";
import Label from "../atoms/Label/Label";
import PostShare from "../molecules/ShareButtons";
import { mediaTablet, mediaPhone, colors } from "../../helpers/styleHelper";
import "../../helpers/postContent.scss";

const PostDetail = ({ post }: { post: any }) => {
  const contentHtml = post.content.childMarkdownRemark.htmlAst;
  const url = `https://shicchi-blog.com/blog/${post.slug}`;
  const image = `https:${post.titleImage.file.url}`;

  return (
    <SCContainer>
      <SCPostImage src={image} />
      <Title text={post.title} color={colors.black} />
      {post.tags.map((text: string, i: number) => (
        <Tag key={i} text={text} />
      ))}
      <br />
      <Label text={post.createdAt} />
      <div className="blog-content">{renderAst(contentHtml)}</div>
      <PostShare title={post.title} url={url} />
    </SCContainer>
  );
};

const SCContainer = styled.div`
  background-color: #ffffff;
  width: 800px;
  padding: 16px;
  margin-bottom: 24px;
  border-radius: 4px;
`;

const SCPostImage = styled.img`
  display: block;
  width: 760px;
  margin: 0 auto;
`;

const Content = styled.pre``;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: Content,
  },
}).Compiler;

export default PostDetail;
