import React from "react";
import styled from "styled-components";

import { colors } from "../../helpers/styleHelper";
import { mediaTabletL, mediaPhone } from "../../helpers/styleHelper";

type Props = {
  toc: string;
};

const PostToc = ({ toc }: { toc: string }) => {
  return (
    <SCContainer>
      <TocList
        dangerouslySetInnerHTML={{
          __html: toc,
        }}
      />
    </SCContainer>
  );
};

const SCContainer = styled.article`
  width: 280px;

  ${mediaTabletL`
    display: none;
  `}
  ${mediaPhone`
    display: none;
  `}
`;

const TocList = styled.section`
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  padding: 24px 0 0 8px;

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    padding-left: 8px;
  }

  li {
    margin-top: 4px;
  }

  a {
    color: ${colors.gray};
    &:hover {
      color: ${colors.gray};
      border-bottom: 1px solid ${colors.gray};
    }
  }
`;

export default PostToc;
