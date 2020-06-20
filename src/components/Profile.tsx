import React from "react";
import styled from "styled-components";
import { List, Icon, Image } from "semantic-ui-react";

import Qitta from "../images/qiita.png";
import { colors } from "../helpers/styleHelper";

const Profile = () => {
  return (
    <List>
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
          <Image src={Qitta} avatar size="mini" />
        </a>
      </List.Item>
      <List.Item>
        <a
          href="https://twitter.com/shicchi7913"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SCIcon name="twitter" bordered circular />
        </a>
      </List.Item>
    </List>
  );
};

const SCGithubIcon = styled(Icon)`
  color: #000000;
`;

const SCIcon = styled(Icon)`
  background-color: ${colors.white};
`;

export default Profile;

{
  /* <List>
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
      <Image src={Qitta} avatar size="mini" />
    </a>
  </List.Item>
  <List.Item>
    <a
      href="https://twitter.com/shicchi7913"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SCIcon name="twitter" bordered circular />
    </a>
  </List.Item>
</List> */
}
