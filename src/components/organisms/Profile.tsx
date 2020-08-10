import React from "react";
import styled from "styled-components";
import { Icon, List, Image, Card } from "semantic-ui-react";

import ProfileImage from "../../images/profile_image.png";
import Qitta from "../../images/qiita.png";
import { colors } from "../../helpers/styleHelper";
import { mediaTablet, mediaPhone } from "../../helpers/styleHelper";

const Profile = () => {
  return (
    <div>
      <Card style={{ width: "264px" }}>
        <Card.Content>
          <Card.Header>プロフィール</Card.Header>
          <List horizontal style={{ margin: "0" }}>
            <List.Item>
              <Image style={{ width: "120px" }} src={ProfileImage} />
            </List.Item>
            <List.Item style={{ verticalAlign: "-30px" }}>
              <a
                href="https://qiita.com/shicchi7913"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SCQiitaIcon src={Qitta} />
              </a>
            </List.Item>
            <List.Item style={{ marginLeft: "4px", verticalAlign: "-31px" }}>
              <a
                href="https://twitter.com/shicchi7913"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SCIcon name="twitter" size="big" />
              </a>
            </List.Item>
          </List>
          <Card.Description>
            新卒では営業職でしたが、転職を経て2019年よりWEBエンジニアとして働いています。
            <br />
            業務ではRuby/Railsを使用。React/TypeScript勉強中
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

const SCQiitaIcon = styled(Image)`
  width: 27px;
  height: 27px;
`;

const SCIcon = styled(Icon)`
  color: ${colors.blue};
  background-color: ${colors.white};
`;

export default Profile;
