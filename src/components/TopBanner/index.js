import React from 'react';
import styles from './styles';
import Twitter from '../../images/twitter.png';
import Github from '../../images/github.png';
import Qitta from '../../images/qiita.png';

const { BannerContainer, MessageContainer, Title, SnsImage, Links } = styles;

const TopBanner = () => {
  return (
    <BannerContainer>
      <MessageContainer>
        <Title>Shicchi's Blog</Title>
      </MessageContainer>
      <Links>
        <a href='https://github.com/m-shichida' target='_blank'><SnsImage src={ Github } /></a>
        <a href='https://qiita.com/shicchi7913' target='_blank'><SnsImage src={ Qitta } /></a>
        <a href='https://twitter.com/shicchi7913' target='_blank'><SnsImage src={ Twitter } /></a>
      </Links>
    </BannerContainer>
  )
}

export default TopBanner;
