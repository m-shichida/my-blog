import React from 'react';
import styles from './styles';
import Image from './profile_image.jpg';
import Twitter from './twitter.png';
import Github from './github.png';
import Qitta from './qiita.png';

const { AboutContainer, Title, ProfileContainer,
        ProfileImage, ProfileContent, SnsImage,
        Links } = styles;

const About = () => {
  return (
    <AboutContainer id='about'>
      <Title>About</Title>
      <ProfileContainer>
        <div style={ { display: 'flex', flexDirection: 'column' } }>
          <ProfileImage src={ Image } />
          <Links>
            <a href='https://github.com/m-shichida' target='_blank'><SnsImage src={ Github } /></a>
            <a href='https://qiita.com/shicchi7913' target='_blank'><SnsImage src={ Qitta } /></a>
            <a href='https://qiita.com/shicchi7913' target='_blank'><SnsImage src={ Twitter } /></a>
          </Links>
        </div>
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
