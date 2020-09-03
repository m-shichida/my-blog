import React from "react";
import styled from "styled-components";

const List = ({ children }: { children: string[] }) => {
  return (
    // マークダウンで基本的に[文字列]形式で送られてくる
    <Text>
      <pre>{children[0]}</pre>
    </Text>
  );
};

const Text = styled.li`
  margin-left: 16px;
`;

export default List;
