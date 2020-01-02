import React from "react"
import styles from './styles';

const { HeaderContainer, NavList, ListItem, TopImage, StyledLink } = styles;

const Header = () => {

  return (
    <HeaderContainer>
      <NavList>
        <ListItem><StyledLink to='/'>Top</StyledLink></ListItem>
        <ListItem><StyledLink to='/about'>About</StyledLink></ListItem>
      </NavList>
    </HeaderContainer>
  )
}

export default Header;
