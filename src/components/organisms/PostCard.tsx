import React from "react";
import styled from "styled-components";
import { Card, Image } from "semantic-ui-react";
import { Link } from "gatsby";

import Heading from "../atoms/Text/Heading";

const PostCard = ({
  slug,
  titleImage,
  title,
  createdAt,
}: {
  slug: string;
  titleImage: string;
  title: string;
  createdAt: string;
}) => {
  return (
    <div style={{ marginTop: "8px" }}>
      <SCCard>
        <SCImage src={titleImage} />
        <Card.Content>
          <Card.Header>
            <Link to={`/blog/${slug}`}>
              <Heading text={title} />
            </Link>
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Meta>{createdAt}</Card.Meta>
        </Card.Content>
      </SCCard>
    </div>
  );
};

const SCCard = styled(Card)`
  margin-top: 8px;
  width: 264px !important;
  height: 272px !important;
`;

const SCImage = styled(Image)`
  width: 100%;
`;

export default PostCard;
