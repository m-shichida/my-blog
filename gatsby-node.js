const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/components/templates/Post.tsx`);
  const tagTemplate = path.resolve(
    "./src/components/templates/SearchResult.tsx"
  );
  const result = await graphql(`
    {
      allContentfulPost(sort: { order: DESC, fields: createdAt }) {
        group(field: tags) {
          fieldValue
          totalCount
          nodes {
            content {
              childMarkdownRemark {
                html
                tableOfContents(absolute: false)
              }
            }
            contentful_id
            createdAt(formatString: "YYYY/MM/DD")
            tags
            title
            titleImage {
              file {
                url
              }
            }
          }
        }
        nodes {
          titleImage {
            file {
              url
            }
          }
          contentful_id
          title
          content {
            childMarkdownRemark {
              htmlAst
              tableOfContents(absolute: false)
            }
          }
          tags
          createdAt(formatString: "YYYY/MM/DD")
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allContentfulPost.nodes;
  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.contentful_id}`,
      component: postTemplate,
      context: {
        contentful_id: post.contentful_id,
        titleImage: post.titleImage.file.url,
        title: post.title,
        content: post.content.childMarkdownRemark.htmlAst,
        tableOfContents: post.content.childMarkdownRemark.tableOfContents,
        tags: post.tags,
        createdAt: post.createdAt,
      },
    });
  });

  const results = result.data.allContentfulPost.group;
  results.forEach((result) => {
    createPage({
      path: `/tags/${result.fieldValue}/`,
      component: tagTemplate,
      context: {
        tags: results,
        tag: result.fieldValue,
        posts: result.nodes.map((post) => ({
          contentful_id: post.contentful_id,
          titleImage: post.titleImage.file.url,
          title: post.title,
          content: post.content.childMarkdownRemark.htmlAst,
          tableOfContents: post.content.childMarkdownRemark.tableOfContents,
          tags: post.tags,
          createdAt: post.createdAt,
        })),
      },
    });
  });
};
