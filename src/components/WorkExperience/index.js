import React from 'react';
import styles from './styles';

const { Container, Title, ExperienceTitle, ExperienceDescription } = styles;

const WorkExperience = () => {
  return (
    <Container>
      <div style={ { marginBottom: '16px' } }>
        <Title>実務で経験したこと</Title>
        <ExperienceTitle>Rails</ExperienceTitle>
        <ExperienceDescription>
          0 => 1の開発経験はありません。Grape APIを使用したWeb APIの構築。<br/>
          建設業の職人マッチングサイトの構築・エラー修正。
        </ExperienceDescription>
      </div>
      <Title>勉強中</Title>
      <ExperienceTitle>React</ExperienceTitle>
      <ExperienceDescription>
        このブログはGabtsbyJs + Contentful + Netlifyを使用して作成しました。<br/>
        jQueryの開発経験しかないので他のフロントエンドのライブラリやフレームワークを触れるようReactの勉強をはじめました。<br/>
        このブログの作成の他にもチャットアプリを作成するなどアウトプットを通して実務に携われるよう勉強しています。
      </ExperienceDescription>
    </Container>
  )
}

export default WorkExperience;
