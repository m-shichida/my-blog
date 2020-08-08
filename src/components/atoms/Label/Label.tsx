import React from "react";
import { Label } from "semantic-ui-react";

const Tag = ({ text }: { text: string }) => (
  <Label color="blue" style={{ marginTop: "8px" }}>
    {text}
  </Label>
);

export default Tag;
