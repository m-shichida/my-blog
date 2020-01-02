import styled from 'styled-components';
import { Link } from "gatsby"
import { colors } from '../../helpers/styleHelper';

const HeaderContainer = styled.header`
  font-family: Helvetica, Arial;
  font-size: 28px;
  font-weight: bold;
  color: ${ colors.white };
  background-color: ${ colors.mainColor };
  height: 60px;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
`

const ListItem = styled.li`
  margin-right: 24px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${ colors.white };
`

const TopImage = styled.img`
  height: 35px;
  width: 35px;
  padding-bottom: 5px;
`

export default { HeaderContainer, NavList, ListItem, TopImage, StyledLink };
