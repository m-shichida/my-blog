import React from "react";
import styled from "styled-components";

import Header from "../organisms/Header";
import PostToc from "../organisms/PostToc";
import SEO from "../../components/seo";
import PostDetail from "../organisms/PostDetail";
import { mediaPc } from "../../helpers/styleHelper";

const Post = ({
  pageContext,
}: {
  pageContext: {
    titleImage: string;
    title: string;
    content: string;
    tableOfContents: string;
    contentful_id: string;
    tags: string[];
    createdAt: string;
  };
}) => {
  const { titleImage, title, tableOfContents, contentful_id } = pageContext;
  const url = `https://shicchi-blog.com/blog/${contentful_id}`;

  return (
    <div style={{ background: "#f3f3f3" }}>
      <SEO title={title} url={url} image={titleImage} />
      <Header />
      <SCPostContainer>
        <PostDetail pageContext={pageContext} />
        <div>
          <PostToc toc={tableOfContents} />
        </div>
      </SCPostContainer>
    </div>
  );
};

const SCPostContainer = styled.div`
  ${mediaPc`
    display: flex;
    width: 1080px;
    margin: 0 auto;
  `}
`;

export default Post;
