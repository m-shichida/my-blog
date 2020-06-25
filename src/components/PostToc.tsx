import React from "react";
import styled from "styled-components";

import { colors } from "../helpers/styleHelper";

type Props = {
  toc: string;
};

const PostToc = (props: Props) => {
  const { toc } = props;

  return (
    <Container>
      <TocList
        dangerouslySetInnerHTML={{
          __html: toc,
        }}
      />
    </Container>
  );
};

const Container = styled.article``;

const TocList = styled.section`
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  padding: 24px 0 0 24px;

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
      border-bottom: 2px solid ${colors.gray};
    }
  }
`;

export default PostToc;
