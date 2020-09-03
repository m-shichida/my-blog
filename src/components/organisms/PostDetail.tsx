import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";

import Heading1 from "../atoms/MarkDown/Heading1";
import Heading2 from "../atoms/MarkDown/Heading2";
import Image from "../atoms/MarkDown/Image";
import List from "../atoms/MarkDown/List";
import Title from "../atoms/Text/Title";
import Tag from "../atoms/Label/Tag";
import Label from "../atoms/Label/Label";
import PostShare from "../molecules/ShareButtons";
import { mediaPc, mediaTabletL, colors } from "../../helpers/styleHelper";
import "../../helpers/postContent.scss";

const PostDetail = ({
  pageContext,
}: {
  pageContext: {
    titleImage: string;
    title: string;
    content: string;
    tableOfContents: string;
    slug: string;
    tags: string[];
    createdAt: string;
  };
}) => {
  const { titleImage, title, slug, content, tags, createdAt } = pageContext;
  const url = `https://shicchi-blog.com/blog/${slug}`;

  return (
    <SCContainer>
      <SCPostImage src={titleImage} />
      <Title text={title} color={colors.black} />
      {tags.map((text: string, i: number) => (
        <Tag key={i} text={text} />
      ))}
      <br />
      <Label text={createdAt} />
      <div className="blog-content">{renderAst(content)}</div>
      <PostShare title={title} url={url} />
    </SCContainer>
  );
};

const SCContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 8px;

  ${mediaPc`
    width: 800px;
    padding: 24px;
  `}
  ${mediaTabletL`
    padding: 16px;
  `}
`;

const SCPostImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 98%;

  ${mediaPc`
    width: 752px;
  `}
`;

const Content = styled.pre`
  font-size: 1rem;
  line-height: 2rem;
  color: #333333;
  font-family: -apple-system, "Segoe UI", "Helvetica Neue",
    "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif !important;
  line-height: 30px;
  white-space: -moz-pre-wrap; /* Mozilla */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  white-space: pre-wrap; /* CSS3 */
  word-wrap: break-word; /* IE 5.5+ */

  ${mediaPc`
    font-size: 1rem;
    line-height: 2rem;
  `}
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Heading1,
    h2: Heading2,
    h3: Heading2,
    h4: Heading2,
    h5: Heading2,
    p: Content,
    img: Image,
    li: List,
  },
}).Compiler;

export default PostDetail;
