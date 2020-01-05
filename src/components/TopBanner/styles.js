import styled from 'styled-components';
import { media, colors } from '../../helpers/styleHelper';

const BannerContainer = styled.section`
  font-family: 'Fjalla One', 'Poppins';
  position: relative;
  color: ${ colors.white };
  height: 40vh;
  background: #2992B9;
  background: -webkit-linear-gradient(to right, #6994BF, #2992B9);
  background: linear-gradient(to right, #6994BF, #2992B9);
  ${ media.phone`
    height: 45vh;
  `}
  ${ media.tablet`
    height: 30vh;
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
  height: 140px;
`

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  ${ media.phone`
    font-size: 4.5rem;
  `}
`

const SnsImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 8px;
  margin-bottom: 16px;
`

const IconImage = styled.img`
  width: 60px;
  height: 70px;
  border-radius: 50%;
`

const Links = styled.section`
  width: 208px;
  margin: 0 auto;
`

export default { BannerContainer, MessageContainer, Title, SnsImage, IconImage, Links };
