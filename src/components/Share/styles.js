import styled from 'styled-components'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton
} from 'react-share'

const Container = styled.article`
  margin-top: 16px;
  text-align: center;
`

const Twitter = styled(TwitterShareButton)`
  margin-right: 8px;
  outline: none;
`

const Facebook = styled(FacebookShareButton)`
  margin-right: 8px;
  outline: none;
`

const Linkedin = styled(LinkedinShareButton)`
  outline: none;
`

export default { Container, Twitter, Facebook, Linkedin }
