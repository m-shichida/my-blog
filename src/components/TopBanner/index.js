import React from 'react';
import styles from './styles';

const { BannerContainer, MessageContainer, Title } = styles;

const TopBanner = () => {
  return (
    <BannerContainer>
      <MessageContainer>
        <Title>
          Shicchi's Blog
        </Title>
      </MessageContainer>
    </BannerContainer>
  )
}

export default TopBanner;
