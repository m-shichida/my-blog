import React from "react";

import Title from "../atoms/Text/Title";
import background from "../../images/post_background.jpg";

const PageTitle = ({ text }: { text: string }) => {
  return (
    <div style={{ background: background, width: "100%" }}>
      <Title text={text} />
    </div>
  );
};

export default PageTitle;
