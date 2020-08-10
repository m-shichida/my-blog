import React from "react";
import "semantic-ui-css/semantic.min.css";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import AbountTemplate from "../components/templates/About";

const About = () => {
  return (
    <>
      <SEO title="プロフィール" />
      <AbountTemplate />
    </>
  );
};

export default About;
