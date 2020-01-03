import styled from 'styled-components';
import { Link } from "gatsby"
import { colors } from '../../helpers/styleHelper';

const HeaderContainer = styled.header`
  font-size: 28px;
  font-family: 'Fjalla One', 'Poppins';
  font-weight: bold;
  color: ${ colors.white };
  background: #2992B9;
  background: -webkit-linear-gradient(to right, #6994BF, #2992B9);
  background: linear-gradient(to right, #6994BF, #2992B9);
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
