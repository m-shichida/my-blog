import React from "react";

import { colors } from "../../../helpers/styleHelper";

const Heading = ({ text, color }: { text: string; color?: string }) => {
  return (
    <h4 style={{ color: color || colors.white, margin: "4px 0" }}>{text}</h4>
  );
};

export default Heading;
