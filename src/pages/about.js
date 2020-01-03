import React from "react";
import Layout from "../components/Layout";
import Github from "../components/Github";
import CompanyExperience from '../components/CompanyExperience';
import Profile from '../components/Profile';
import WorkExperience from "../components/WorkExperience";
import styled from 'styled-components';
import { media } from '../helpers/styleHelper';

const Blog = () => {
  return (
    <>
      <Layout>
        <Container>
          <Github />
          <Content>
            <CompanyExperience />
            <Profile />
          </Content>
          <WorkExperience/>
        </Container>
      </Layout>
    </>
  )
}

export default Blog;


const Container = styled.section`
  color: #4B4B4B;
  font-family: Arial, Helvetica, ‘游ゴシック’, ‘Yu Gothic’, YuGothic, HiraKakuProN-W3, ‘メイリオ’, Meiryo, sans-serif;
  min-height: 85.5vh;
  background-color: #F5F5F5;
`

const Content = styled.section`
  display: flex;
  justify-content: space-around;
  max-width: 1024px;
  margin: 0 auto;
  margin-bottom: 16px;
  ${ media.phone`
    flex-direction: column-reverse;
  `}
`
