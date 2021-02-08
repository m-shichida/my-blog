import React from "react";
import styled from "styled-components";
import { List } from "semantic-ui-react";
import { Link } from "gatsby";
import { Header as SubTitle } from "semantic-ui-react";

import Title from "../atoms/Text/Title";
import { colors, mediaPc } from "../../helpers/styleHelper";

const Header = () => {
  return (
    <SCHeader>
      <SCContainer>
        <List horizontal>
          <List.Item>
            <Link to="/">
              <Title text="Shicchi's Blog" />
            </Link>
          </List.Item>
          <List.Item>
            <SubTitle as="h2">
              <a
                href="https://m-shichida.github.io/resume/"
                rel="noreferrer"
                target="_blank"
                style={{ color: colors.white }}
              >
                about
              </a>
            </SubTitle>
          </List.Item>
        </List>
      </SCContainer>
    </SCHeader>
  );
};

const SCHeader = styled.header`
  background-color: ${colors.black};
  padding: 8px;
`;

const SCContainer = styled.div`
  ${mediaPc`
    width: 1080px;
    margin: 0 auto;
  `}
`;

export default Header;
