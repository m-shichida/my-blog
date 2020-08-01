const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/components/templates/Post.tsx`);
  const tagTemplate = path.resolve(
    "./src/components/templates/SearchResult.tsx"
  );
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
