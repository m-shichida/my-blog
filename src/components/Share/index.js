import React from 'react'
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share'
import styles from './styles'

const { Container, Twitter, Facebook, Linkedin } = styles

const Share = ({ title, tags, url, description }) => {
  return (
    <Container>
      <Twitter
        title={ title }
        via={ 'shicchi7913' }
        url={ url }
        hashtags={ tags }
      >
        <TwitterIcon
          round
          size={ 40 }
        />
      </Twitter>
      <Facebook
        title={ title }
        url={ url }
      >
        <FacebookIcon
          round
          size={ 40 }
        />
      </Facebook>
      <Linkedin
        title={ title }
        url={ url }
        summary={ description }
      >
        <LinkedinIcon
          round
          size={ 40 }
        />
      </Linkedin>
    </Container>
  )
}

export default Share;
