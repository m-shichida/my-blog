import React from "react";
import styled from "styled-components";
import { Item, Segment, Icon, List, Image } from "semantic-ui-react";

import ProfileImage from "../images/profile_image.jpg";
import Qitta from "../images/qiita.png";
import { colors } from "../helpers/styleHelper";

const Profile = () => {
  return (
    <SCContainer>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image src={ProfileImage} size="tiny" />

            <Item.Content>
              <Item.Header as="h3">プロフィール</Item.Header>
              <Item.Meta>名前: 七田将嗣</Item.Meta>
              <Item.Meta>出身地: 福岡県</Item.Meta>
              <Item.Description>
                <p>閲覧ありがとうございます。</p>
                <p>2019年7月より大阪にてWEBエンジニアとして働いています。</p>
                <p>
                  ほぼメモに近いですが、日々自分が学んだことを可視化しています。
                </p>
              </Item.Description>
              <Item.Extra>
                <List horizontal>
                  <List.Item>
                    <a
                      href="https://github.com/m-shichida"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SCGithubIcon name="github" size="big" />
                    </a>
                  </List.Item>
                  <List.Item>
                    <a
                      href="https://qiita.com/shicchi7913"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SCQiitaIcon src={Qitta} avatar />
                    </a>
                  </List.Item>
                  <List.Item>
                    <a
                      href="https://twitter.com/shicchi7913"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SCIcon name="twitter" size="big" />
                    </a>
                  </List.Item>
                </List>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </SCContainer>
  );
};

const SCContainer = styled.div`
  max-width: 830px;
  margin: 0 auto;
  margin-top: 8px;
`;

const SCQiitaIcon = styled(Image)`
  width: 27px;
  height: 27px;
`;

const SCGithubIcon = styled(Icon)`
  color: #000000;
`;

const SCIcon = styled(Icon)`
  background-color: ${colors.white};
`;

export default Profile;
