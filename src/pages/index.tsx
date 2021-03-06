import React from "react";
import "semantic-ui-css/semantic.min.css";
import { graphql } from "gatsby";

import IndexTemplate from "../components/templates/Index";

const Index = ({ data }: { data: any }) => {
  const posts = data.allContentfulPost.edges.map((data: any) => ({
    contentful_id: data.node.contentful_id,
    titleImage: data.node.titleImage.file.url,
    title: data.node.title,
    createdAt: data.node.createdAt,
  }));
  const tags = data.allContentfulPost.group;
  return (
    <>
      <IndexTemplate tags={tags} posts={posts} />
    </>
  );
};

export const query = graphql`
  {
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      group(field: tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          createdAt(formatString: "YYYY/MM/DD")
          contentful_id
          title
          tags
          titleImage {
            file {
              url
            }
          }
          content {
            content
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

export default Index;
