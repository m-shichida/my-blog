import styled from 'styled-components';
import BannerImage from '../../images/top-banner.jpg';

const BannerContainer = styled.section`
  position: relative;
  color: #FFFFFF;
  height: 60vh;
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
  font-size: 48px;
  text-align: center;
`

export default { BannerContainer, MessageContainer, Title };
