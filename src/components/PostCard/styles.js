import styled from 'styled-components';

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

const Title = styled.h1`
  font-size: 1.4rem;
`

const Tags = styled.div`
  margin-top: 12px;
`

const Tag = styled.span`
  font-size: 1rem;
  color: #4B4B4B;
  padding: 4px;
  background-color: #EEEEEE;
  border-radius: 4px;
  margin-right: 4px;
`

export default { PublishedAt, Title, Tags, Tag };
