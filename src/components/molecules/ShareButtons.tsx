import React from "react";
import styled from "styled-components";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

const PostShare = ({ title, url }: { title: string; url: string }) => {
  return (
    <Container>
      <SCTwitter title={title} via={"shicchi7913"} url={url}>
        <TwitterIcon round size={40} />
      </SCTwitter>
      <SCFacebook title={title} url={url}>
        <FacebookIcon round size={40} />
      </SCFacebook>
      <SCLinkedin title={title} url={url}>
        <LinkedinIcon round size={40} />
      </SCLinkedin>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const SCTwitter = styled(TwitterShareButton)`
  margin-right: 8px;
  outline: none;
`;

const SCFacebook = styled(FacebookShareButton)`
  margin-right: 8px;
  outline: none;
`;

const SCLinkedin = styled(LinkedinShareButton)`
  outline: none;
`;

export default PostShare;
