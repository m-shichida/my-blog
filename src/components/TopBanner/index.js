import React from 'react';
import styles from './styles';
import ScrollDown from './scroll_down.svg';

const { BannerContainer, MessageContainer, Title, ScrollDownContainer, Message, Image, StyledLink } = styles;

const TopBanner = () => {
  return (
    <BannerContainer>
      <MessageContainer>
        <Title>
          Shichida Masatsugu's Portfolio
        </Title>
        <ScrollDownContainer>
          <StyledLink to='#about'>
            <Message>
              Click here!
            </Message>
            <Image src={ ScrollDown } />
          </StyledLink>
        </ScrollDownContainer>
      </MessageContainer>
    </BannerContainer>
  )
}

export default TopBanner;
