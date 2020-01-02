import styled from 'styled-components';

const PublishedAt = styled.p`
  display: inline-block;
  color: #FFF;
  padding: 4px;
  margin-top: 4px;
  border: 1px solid #2D7BFF;
  border-radius: 2px;
  background-color: #2D7BFF;
`

const Tags = styled.div`
  margin-top: 12px;
`

const Tag = styled.span`
  padding: 4px;
  color: #4B4B4B;
  background-color: #EEEEEE;
  border-radius: 4px;
  margin-right: 4px;
`

export default { PublishedAt, Tags, Tag };
