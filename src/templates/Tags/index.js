// import React from "react";
// import SEO from "../../components/seo";
// import  from "../../components/Layout";
// import TopBanner from "../../components/TopBanner";
// import { default as TotalTags } from "../../components/Tags";
// import BlogPosts from "../../components/BlogPosts";
// import { graphql } from "gatsby";

const Tags = () => {
  // const { tag } = pageContext;
  // const posts = data.allContentfulPost.group.filter((post) => {
  //   return post.fieldValue === tag;
  // });
  // return (
  //   <Layout>
  //     <SEO title={tag} />
  //     <TopBanner />
  //     <TotalTags tags={data.allContentfulPost.group} />
  //     <BlogPosts posts={posts[0].nodes} />
  //   </Layout>
  // );
};

export default Tags;

// export const pageQuery = graphql`
//   query {
//     allContentfulPost {
//       group(field: tags) {
//         fieldValue
//         totalCount
//         nodes {
//           content {
//             childMarkdownRemark {
//               html
//             }
//           }
//           description
//           slug
//           publishedAt(formatString: "YYYY/MM/DD")
//           tags
//           title
//           titleImage {
//             file {
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// `;
