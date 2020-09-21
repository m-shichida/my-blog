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
  color: #333333;
  margin: 16px 0;
  margin-left: 16px;

  pre {
    font-family: -apple-system, "Segoe UI", "Helvetica Neue",
      "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif !important;
    white-space: -moz-pre-wrap; /* Mozilla */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    white-space: pre-wrap; /* CSS3 */
    word-wrap: break-word; /* IE 5.5+ */
  }
`;

export default List;
