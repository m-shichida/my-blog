import styled from 'styled-components';

const AboutContainer = styled.section`
  color: #4B4B4B;
  font-family: Arial, Helvetica, ‘游ゴシック’, ‘Yu Gothic’, YuGothic, HiraKakuProN-W3, ‘メイリオ’, Meiryo, sans-serif;
  height: 100vh;
  padding-top: 32px;
  background-color: #F5F5F5;
`

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  text-decoration: underline
`

const ProfileContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 25vh 0;
`

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 0 25px 0 #d9d9d9;
  margin-right: 24px;
`

const ProfileContent = styled.div`
  font-size: 1.5vw;
  border: 1px solid #4B4B4B;
  border-radius: 8px;
  padding: 8px;
  margin: 24px 0;
`

const Links = styled.span`
  padding-left: 24px;
  margin-top: 16px;
`

const SnsImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 8px;
`

export default { AboutContainer, Title, ProfileContainer, ProfileImage,
                 ProfileContent, SnsImage, Links };
