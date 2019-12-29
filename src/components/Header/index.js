import React from "react"
import home from './home.png'
import styles from './styles';

const { HeaderContainer, NavList, ListItem, TopImage, StyledLink } = styles;

const Header = () => {

  return (
    <HeaderContainer>
      <NavList>
        <ListItem>
          <StyledLink to='/'>
            <TopImage src={ home }/>
          </StyledLink>
        </ListItem>
        <ListItem><StyledLink to='/blog/'>Blog</StyledLink></ListItem>
        <ListItem><StyledLink to='#about'>About</StyledLink></ListItem>
        <ListItem>Contact</ListItem>
      </NavList>
    </HeaderContainer>
  )
}

export default Header;
