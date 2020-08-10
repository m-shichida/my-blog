import React from "react";
import { Header } from "semantic-ui-react";

import { colors } from "../../../helpers/styleHelper";

const SubTitle = ({ text, color }: { text: string; color?: string }) => {
  return (
    <Header as="h2" style={{ color: color || colors.white }}>
      {text}
    </Header>
  );
};

export default SubTitle;
