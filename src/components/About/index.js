import React from 'react';
import styles from './styles';
import Image from './profile_image.jpg';

const { AboutContainer, Title, ProfileContainer, ProfileImage, ProfileContent } = styles;

const About = () => {
  return (
    <AboutContainer id='about'>
      <Title>About</Title>
      <ProfileContainer>
        <ProfileImage src={ Image } />
        <div>
          <ProfileContent>
            名前: 七田 将嗣
            <br />
            出身地: 福岡県
            <br />
            職業: webエンジニア
            <br />
            普段は大阪でRailsのエンジニアとして働いています。
          </ProfileContent>
        </div>
      </ProfileContainer>
    </AboutContainer>
  )
}

export default About;
