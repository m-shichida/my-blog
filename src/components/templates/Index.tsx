import React from "react";
import styled from "styled-components";

import Header from "../organisms/Header";
import PostTags from "../organisms/PostTags";
import PostCard from "../organisms/PostCard";
import Profile from "../organisms/Profile";
import {
  mediaPc,
  mediaTabletL,
  mediaTablet,
  mediaPhone,
} from "../../helpers/styleHelper";

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
        <SCContentWrapper>
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
          <SCSidebarContainer>
            <Profile />
          </SCSidebarContainer>
        </SCContentWrapper>
        <PostTags tags={tags} />
      </SCContainer>
    </>
  );
};

const SCContainer = styled.div`
  ${mediaTabletL`
    padding: 8px;
  `}
  ${mediaPc`
    width: 1080px;
    margin: 0 auto;
    padding-top: 8px;
    padding-bottom: 32px;
  `}
`;

const SCContentWrapper = styled.div`
  ${mediaPc`
    display: flex;
    justify-content: space-between;
  `}
`;

const SCCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &:after {
    content: "";
    display: block;
    width: 33%;
  }

  ${mediaPc`
    width: 808px;
    .post-card:nth-child(n + 4) {
      margin-top: 8px;
    }
  `}
  ${mediaTabletL`
    .post-card:nth-child(n + 5) {
      margin-top: 8px;
    }
    &:after {
      content: "";
      display: block;
      width: 50%;
    }
  `}
  ${mediaTablet`
    .post-card:nth-child(n + 4) {
      margin-top: 8px;
    }
    &:after {
      content: "";
      display: block;
      width: 50%;
    }
  `}
  ${mediaPhone`
    justify-content: space-between;
    .post-card:nth-child(n + 3) {
      margin-top: 8px;
    }
  `}
`;

const SCSidebarContainer = styled.div`
  ${mediaPc`
    display: flex;
    flex-direction: column;
  `}
`;

export default Index;
