import styled from 'styled-components';
import { colors, media } from '../../helpers/styleHelper'

const Container = styled.article`
  background-color: ${ colors.white };
  border-radius: 8px;
  padding: 16px;
  width: 308px;
  ${ media.phone`
    margin: 16px auto;
  `}
  ${ media.tablet`
    margin-bottom: 16px;
    width: 728px;
  `}
`

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`

const ProfileHeader = styled.div`
  display: flex;
  justify-content: left;
  padding-bottom: 24px;
`

const ProfileImage = styled.img`
  width: 90px;
  height: 110px;
  border-radius: 50%;
  box-shadow: 0 0 25px 0 #d9d9d9;
  margin-right: 24px;
`

const ProfileContent = styled.div`
  font-size: 1.6rem;
  padding-top: 8px;
  border-radius: 16px;
  line-height: 2.6rem;
`

const Message = styled.p`
  font-size: 1.4rem;
  ${ media.tablet`
    font-size: 1.6rem;
  `}
`

export default { Container, Title, ProfileImage,
                 ProfileHeader, ProfileContent, Message };
