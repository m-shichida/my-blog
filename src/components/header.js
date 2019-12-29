import React from "react"
import styled from 'styled-components';
import home from '../images/home.png'
import { Link } from "gatsby"
import { colors } from '../helpers/styleHelper';

const HeaderContainer = styled.header`
  font-family: Helvetica, Arial;
  font-size: 28px;
  font-weight: bold;
  color: #FFFFFF;
  background-color: #607D8B;
  height: 60px;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <NavList>
        <li style={ { marginRight: '32px' } }>
          <Link to='/'>
            <img style={ { height: '35px', width: '35px', paddingBottom: '5px' } } src={ home }/>
          </Link>
        </li>
        <li><Link to='/blog/' style={{ textDecoration: 'none', marginRight: '24px', color: colors.white }}>Blog</Link></li>
        <li style={{ textDecoration: 'none', marginRight: '24px' }}>About</li>
        <li style={{ textDecoration: 'none', marginRight: '24px' }}>Contact</li>
      </NavList>
    </HeaderContainer>
  )
}

export default Header;
