import React from "react";
import styled from "styled-components";
import { Card, Image } from "semantic-ui-react";
import { Link } from "gatsby";

import Heading from "../atoms/Text/Heading";
import { colors } from "../../helpers/styleHelper";
import { mediaPc, mediaTabletL, mediaPhone } from "../../helpers/styleHelper";

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
    <span className="post-card">
      <SCCard>
        <SCImage src={titleImage} />
        <Card.Content>
          <Card.Header>
            <Link to={`/blog/${slug}`}>
              <Heading text={title} color={colors.black} />
            </Link>
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Meta>{createdAt}</Card.Meta>
        </Card.Content>
      </SCCard>
    </span>
  );
};

const SCCard = styled(Card)`
  height: 272px !important;

  ${mediaPc`
    width: 264px !important;
    `}
  ${mediaTabletL`
    width: 245px !important;
  `}
  ${mediaPhone`
    width: 168px !important;
  `}
`;

const SCImage = styled(Image)`
  width: 100%;
`;

export default PostCard;
