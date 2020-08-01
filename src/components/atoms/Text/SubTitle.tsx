import React from "react";
import { Header } from "semantic-ui-react";

const SubTitle = ({ text, color }: { text: string; color: string }) => {
  return (
    <Header as="h2" style={{ color: color }}>
      {text}
    </Header>
  );
};

export default SubTitle;
