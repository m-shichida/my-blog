import React from "react";
import styled from "styled-components";

import Header from "../organisms/Header";
import PostTags from "../organisms/PostTags";
import PostCard from "../organisms/PostCard";

const Index = ({
  tags,
  posts,
}: {
  tags: { fieldValue: string; totalCount: number }[];
  posts: {
    slug: string;
    titleImage: string;
    title: string;
    createdAt: string;
  }[];
}) => {
  return (
    <>
      <Header />
      <SCContainer>
        <PostTags tags={tags} />
        <SCCardWrapper>
          {posts.map((post, i) => (
            <PostCard
              key={i}
              slug={post.slug}
              titleImage={post.titleImage}
              title={post.title}
              createdAt={post.createdAt}
            />
          ))}
        </SCCardWrapper>
      </SCContainer>
    </>
  );
};

const SCContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

const SCCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 16px;

  &:before {
    content: "";
    display: block;
    width: 25%;
    order: 1;
  }
  &:after {
    content: "";
    display: block;
    width: 24%;
  }
`;

export default Index;
