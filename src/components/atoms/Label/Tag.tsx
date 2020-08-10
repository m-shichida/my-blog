import React from "react";
import { Label } from "semantic-ui-react";
import { Link } from "gatsby";

const Tag = ({ text, count }: { text: string; count?: number }) => (
  <Label as={Link} tag style={{ margin: "8px 0 0 16px" }} to={`/tags/${text}`}>
    {text}
    <Label.Detail>{count}</Label.Detail>
  </Label>
);

export default Tag;
