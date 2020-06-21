import React from "react";
import styled from "styled-components";
import { Segment, Label, Header as Title } from "semantic-ui-react";
import { Link } from "gatsby";

type Props = {
  tags: {
    fieldValue: string;
    totalCount: number;
  }[];
};

const TopTags = (props: Props) => {
  const { tags } = props;

  return (
    <Segment>
      <SCTitle as="h3">記事を探す</SCTitle>
      <div style={{ marginTop: "16px" }}>
        {tags.map((tag, i) => (
          <Label
            as={Link}
            tag
            key={i}
            style={{ marginLeft: "20px" }}
            to={`/tags/${tag.fieldValue}`}
          >
            {tag.fieldValue}
            <Label.Detail>{tag.totalCount}</Label.Detail>
          </Label>
        ))}
      </div>
    </Segment>
  );
};

const SCTitle = styled(Title)`
  text-align: center;
  padding-bottom: 4px;
`;

export default TopTags;
