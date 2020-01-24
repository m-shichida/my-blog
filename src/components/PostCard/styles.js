import styled from 'styled-components';
import { Link } from 'gatsby';
import { media, colors } from '../../helpers/styleHelper';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${ colors.white };
  width: 325px;
  height: 420px;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.6);
  margin: 0 8px 16px 8px;
  -webkit-transition: all .3s;
  transition: all .3s;

  &:hover {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }

  ${ media.phone`
    min-height: 65vh;
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

const CardActionArea = styled(Link)`
  display: inline-block;
  text-decoration: none;
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
  padding: 5px;
`

const Title = styled.h1`
  color: ${ colors.black };
  font-size: 1.6rem;
  font-weight: bold;
  overflow-wrap: break-word;
  padding: 5px 5px 0 5px;

  &:hover {
    text-decoration: underline;
  }

  ${ media.phone`
    font-size: 2rem;
  `}
`

const Description = styled.p`
  color: ${ colors.gray };
  font-size: 1.2rem;
  padding-bottom: 4px;
`

const Tags = styled.section`
  margin: 8px 0 16px 8px;
`

const Tag = styled(Link)`
  font-size: 1.4rem;
  color: ${ colors.black };
  text-decoration: none;
  padding: 4px;
  background-color: ${ colors.lightGray };
  border-radius: 4px;
  margin-right: 4px;

  &:hover {
    text-decoration: underline;
  }

  ${ media.phone`
    font-size: 1.6rem;
  `}
`

export default { PublishedAt, Card, CardActionArea, CardImage, CardContent,
                 Title, Description, Tags, Tag };
