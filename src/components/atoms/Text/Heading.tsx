import React from "react";

import { colors } from "../../../helpers/styleHelper";

const Heading = ({ text }: { text: string }) => {
  return <h4 style={{ color: `${colors.black}` }}>{text}</h4>;
};

export default Heading;
