import React from "react";
import styled from "styled-components";
import { List } from "semantic-ui-react";
import { Link } from "gatsby";

import Title from "../atoms/Text/Title";
import SubTitle from "../atoms/Text/SubTitle";
import { colors } from "../../helpers/styleHelper";

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
            <Link to="/about">
              <SubTitle text="About" color={colors.white} />
            </Link>
          </List.Item>
        </List>
      </SCContainer>
    </SCHeader>
  );
};

const SCHeader = styled.header`
  background-color: ${colors.black};
  padding: 8px 0;
`;

const SCContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

export default Header;
