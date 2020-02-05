import React from 'react';
import styles from './styles';
import Image from '../../images/profile_transparent_image.png';

const { Container, ProfileImage, ProfileContent, ProfileHeader,
        Title, Message } = styles

const Profile = () => {
  return (
    <div>
      <Container>
        <Title>プロフィール</Title>
        <ProfileHeader>
          <ProfileImage src={ Image } />
          <ProfileContent>
            名前: 七田 将嗣
            <br />
            出身地: 福岡県
            <br />
            趣味: 釣り・野球
            <br />
          </ProfileContent>
        </ProfileHeader>
        <Message>
          閲覧ありがとうございます。<br/>
          2019年7月より、大阪にてWEBエンジニアとして働いています。<br/>
          技術的な投稿のほか、日々自分が学んだことを可視化することでレベルアップに繋がるよう頑張っていきたいと思います。
        </Message>
      </Container>
    </div>
  )
}

export default Profile;
