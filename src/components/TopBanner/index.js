import React from 'react';
import styles from './styles';
import Twitter from '../../images/twitter.png';
import Github from '../../images/github.png';
import Qitta from '../../images/qiita.png';
import Icon from '../../images/profile_image.jpg';

const { BannerContainer, MessageContainer, Title, SnsImage, IconImage, Links } = styles;

const TopBanner = () => {
  return (
    <BannerContainer>
      <MessageContainer>
        <Title>Shicchi's Tech Blog</Title>
        <Links>
          <IconImage
            src={ Icon }
          />
          <a href='https://github.com/m-shichida' target='_blank' rel="noopener noreferrer"><SnsImage src={ Github } /></a>
          <a href='https://qiita.com/shicchi7913' target='_blank' rel="noopener noreferrer"><SnsImage src={ Qitta } /></a>
          <a href='https://twitter.com/shicchi7913' target='_blank' rel="noopener noreferrer"><SnsImage src={ Twitter } /></a>
        </Links>
      </MessageContainer>
    </BannerContainer>
  )
}

export default TopBanner;
