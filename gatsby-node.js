const path = require("path");
const _ = require("lodash");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/Post/index.tsx`);
  const tagTemplate = path.resolve("./src/templates/Tags/index.js");
  const result = await graphql(`
    {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
        group(field: tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allContentfulPost.edges;
  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.node.slug}`,
      component: postTemplate,
      context: {
        slug: post.node.slug,
      },
    });
  });

  const tags = result.data.allContentfulPost.group;
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
