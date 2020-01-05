import styled from 'styled-components';
import { colors, media } from '../../helpers/styleHelper'

const Container = styled.article`
  width: 628px;
  padding: 16px;
  background-color: ${ colors.white };
  border-radius: 8px;
  ${ media.phone`
    margin-bottom: 8px;
  `}
  ${ media.tablet`
    width: 728px;
    margin-bottom: 8px;
  `}
`

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`

const Company = styled.section`
  margin-bottom: 16px;
`

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  ${ media.phone`
    display: inline-block;
  `}
`

const CompanyName = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${ colors.lightGray };
  ${ media.phone`
    margin-bottom: 8px;
  `}
`

const CompanyPeriod = styled.span`
  font-size: 1.6rem;
`

const CompanyDescription = styled.p`
`

const Content = styled.pre`
  color: ${ colors.gray };
  font-size: 1.4rem;
  line-height: 2.4rem;
  ${ media.tablet`
    font-size: 1.6rem;
  `}
`

export default { Container, Title, Company, CompanyHeader,
                 CompanyName, CompanyPeriod, CompanyDescription, Content }
