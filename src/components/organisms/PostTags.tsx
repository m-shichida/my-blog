import React from "react";
import styled from "styled-components";
import { Segment } from "semantic-ui-react";

import Heading from "../atoms/Text/Heading";
import Tag from "../atoms/Label/Tag";
import { colors } from "../../helpers/styleHelper";

const PostTags = ({
  tags,
}: {
  tags: { fieldValue: string; totalCount: number }[];
}) => {
  return (
    <SCSegment style={{ marginTop: "8px" }}>
      <div style={{ textAlign: "center" }}>
        <Heading text="記事を探す" color={colors.black} />
      </div>
      <div style={{ marginTop: "8px" }}>
        {tags.map((tag, i) => (
          <Tag key={i} text={tag.fieldValue} count={tag.totalCount} />
        ))}
      </div>
    </SCSegment>
  );
};

const SCSegment = styled(Segment)`
  margin-top: 8px !important;
  margin-bottom: 0 !important;
`;

export default PostTags;
