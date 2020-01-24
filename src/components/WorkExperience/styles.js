import styled from 'styled-components'
import { colors, media } from '../../helpers/styleHelper';

const Container = styled.article`
  max-width: 976px;
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${ colors.white };
  ${ media.phone`
    margin: 0 8px 24px 8px;
  `}
  ${ media.tablet`
    width: 728px;
  `}
`

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  padding-bottom: 4px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${ colors.lightGray };
`

const ExperienceTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 8px;
`

const ExperienceDescription = styled.div`
`

const Content = styled.pre`
  color: ${ colors.gray };
  font-size: 1.4rem;
  line-height: 2.4rem;
  ${ media.tablet`
    font-size: 1.6rem;
  `}
`

export default { Container, Title, ExperienceTitle,
                 ExperienceDescription, Content };
