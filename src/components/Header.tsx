import React from "react";
import styled from "styled-components";
import { Header as Title, List } from "semantic-ui-react";
import { Link } from "gatsby";

import { colors } from "../helpers/styleHelper";

const Header = () => {
  return (
    <SCHeader>
      <List horizontal>
        <List.Item>
          <Link to="/">
            <SCTitle as="h1">Shicchi's Tech Blog</SCTitle>
          </Link>
        </List.Item>
        <List.Item>
          <Link to="/about">
            <SCTitle as="h2" color="green">
              About
            </SCTitle>
          </Link>
        </List.Item>
      </List>
    </SCHeader>
  );
};

const SCHeader = styled.header`
  background-color: ${colors.black};
  padding: 8px;
`;

const SCTitle = styled(Title)`
  margin: 0;
  margin-left: 8px;
  color: ${colors.white};
`;

export default Header;
