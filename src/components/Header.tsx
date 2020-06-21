import React from "react";
import styled from "styled-components";
import { Header as Title, List } from "semantic-ui-react";
import { Link } from "gatsby";

import { colors } from "../helpers/styleHelper";

const Header = () => {
  return (
    <SCHeader>
      <SCContainer>
        <List horizontal>
          <List.Item>
            <Link to="/">
              <SCTitle as="h1">Shicchi's Tech Blog</SCTitle>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/about">
              <SCTitle as="h2" color="green" style={{ marginLeft: "8px" }}>
                About
              </SCTitle>
            </Link>
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
  max-width: 1200px;
  margin: 0 auto;
`;

const SCTitle = styled(Title)`
  margin: 0;
  color: ${colors.white};
`;

export default Header;
