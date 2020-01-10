import styled from 'styled-components';
import { Link } from 'gatsby';
import { media, colors } from '../../helpers/styleHelper';

const Card = styled(Link)`
  display: inline-block;
  color: ${ colors.black };
  background-color: ${ colors.white };
  width: 325px;
  height: 365px;
  text-decoration: none;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.6);
  margin: 0 8px 16px 8px;
  ${ media.phone`
    min-height: 50vh;
    width: 90vw;
    margin: 8px auto;
  `}
  ${ media.tablet`
    width: 364px;
    &:nth-child(even) {
      margin: 0 0 8px 0;
    }
  `}
`

const PublishedAt = styled.p`
  display: inline-block;
  font-size: 1.2rem;
  color: ${ colors.white };
  padding: 4px;
  margin-top: 4px;
  border: 1px solid ${ colors.blue };
  border-radius: 2px;
  background-color: ${ colors.blue };
  ${ media.phone`
    font-size: 1.6rem;
  `}
`

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover
`

const CardContent = styled.div`
  padding: 8px;
  padding-bottom: 16px;
`

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  overflow-wrap: break-word;
  ${ media.phone`
    font-size: 2rem;
  `}
`

const Tags = styled.div`
  margin-top: 12px;
`

const Tag = styled.span`
  font-size: 1.2rem;
  color: ${ colors.black };
  padding: 4px;
  background-color: ${ colors.lightGray };
  border-radius: 4px;
  margin-right: 4px;
  ${ media.phone`
    font-size: 1.6rem;
  `}
`

export default { PublishedAt, Card, CardImage, CardContent, Title, Tags, Tag };
