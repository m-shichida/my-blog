import styled from 'styled-components';
import { Link } from 'gatsby';

const PublishedAt = styled.p`
  display: inline-block;
  font-size: 0.8rem;
  color: #FFF;
  padding: 4px;
  margin-top: 4px;
  border: 1px solid #2D7BFF;
  border-radius: 2px;
  background-color: #2D7BFF;
`

const Card = styled(Link)`
  display: inline-block;
  color: #4B4B4B;
  background-color: #FFF;
  width: 344px;
  height: 365px;
  text-decoration: none;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.6)
`

const CardImage = styled.img`
`

const CardContent = styled.div`
  padding: 8px;
  padding-bottom: 16px;
`

const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  overflow-wrap: break-word;
`

const Tags = styled.div`
  margin-top: 12px;
`

const Tag = styled.span`
  font-size: 0.8rem;
  color: #4B4B4B;
  padding: 4px;
  background-color: #EEEEEE;
  border-radius: 4px;
  margin-right: 4px;
`

export default { PublishedAt, Card, CardImage, CardContent, Title, Tags, Tag };
