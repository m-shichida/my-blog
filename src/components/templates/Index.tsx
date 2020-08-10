import React from "react";
import styled from "styled-components";

import Header from "../organisms/Header";
import PostTags from "../organisms/PostTags";
import PostCard from "../organisms/PostCard";
import Profile from "../organisms/Profile";

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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          <Profile />
        </div>
        <PostTags tags={tags} />
      </SCContainer>
    </>
  );
};

const SCContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

const SCCardWrapper = styled.div`
  width: 808px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &:after {
    content: "";
    display: block;
    width: 30%;
  }
`;

export default Index;
