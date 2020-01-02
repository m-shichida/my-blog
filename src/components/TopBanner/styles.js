import styled from 'styled-components';
import BannerImage from '../../images/top-banner.jpg';
import { media, colors } from '../../helpers/styleHelper';

const BannerContainer = styled.section`
  position: relative;
  color: ${ colors.white };
  height: 60vh;
  background-image: url(${ BannerImage });
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${ media.phone`
    height: 45vh;
  `}
`

const MessageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 80vw;
  height: 60px;
`

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  ${ media.phone`
    font-size: 4.5rem;
  `}
`

const SnsImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 8px;
`

const Links = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 4px 4px 0;
`

export default { BannerContainer, MessageContainer, Title, SnsImage, Links };
