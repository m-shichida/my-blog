import styled from 'styled-components';
import BannerImage from '../../images/top-banner.jpg';
import { Link } from "gatsby"

const BannerContainer = styled.section`
  position: relative;
  font-family: Arial, Helvetica, ‘游ゴシック’, ‘Yu Gothic’, YuGothic, HiraKakuProN-W3, ‘メイリオ’, Meiryo, sans-serif;
  color: #FFFFFF;
  height: 92.5vh;
  background-image: url(${ BannerImage });
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const MessageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 48%;
  height: 60px;
`

const Title = styled.h1`
  font-family: Arial, Helvetica, ‘游ゴシック’, ‘Yu Gothic’, YuGothic, HiraKakuProN-W3, ‘メイリオ’, Meiryo, sans-serif;
  font-size: 48px;
`

const ScrollDownContainer = styled.div`
  padding-top: 8px;
  cursor: pointer;
  width: 160px;
  margin: 0 auto;
`

const Message = styled.p`
  font-size: 32px;
`

const Image = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  margin: 0 auto;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
`

export default { BannerContainer, MessageContainer, Title, ScrollDownContainer, Message, Image, StyledLink };
