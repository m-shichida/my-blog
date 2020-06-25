import React from "react";
import styled from "styled-components";
import { Card, Image, Label } from "semantic-ui-react";
import { Link } from "gatsby";

import { colors } from "../helpers/styleHelper";
import { mediaTablet } from "../helpers/styleHelper";

type Props = {
  slug: string;
  titleImage: string;
  title: string;
  createdAt: string;
  tags: string[];
};

const PostCard = (props: Props) => {
  const { slug, titleImage, title, createdAt, tags } = props;

  return (
    <SCCardContainer>
      <SCCard>
        <SCImage src={titleImage} />
        <Card.Content>
          <SCCardTitle>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </SCCardTitle>
          <SCCardMeta>{createdAt}</SCCardMeta>
        </Card.Content>
        <Card.Content extra>
          {tags.map((tag, i) => (
            <Label as={Link} key={i} horizontal to={`/tags/${tag}`}>
              {tag}
            </Label>
          ))}
        </Card.Content>
      </SCCard>
    </SCCardContainer>
  );
};

const SCCard = styled(Card)`
  background-color: ${colors.white};
  height: 330px;
`;

const SCCardContainer = styled.div`
  margin: 16px 0 0 16px;
`;

const SCImage = styled(Image)`
  width: 290px;
`;

const SCCardTitle = styled(Card.Header)`
  a {
    color: ${colors.black};
  }
`;

const SCCardMeta = styled(Card.Meta)`
  padding-top: 4px;
`;

export default PostCard;
