import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import ProfileImage from "../images/profile_image.jpg";

function SEO({ lang, meta, title, url, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  );

  const metaUrl = url || "shicchi-blog";
  const metaTitle = title || site.siteMetadata.title;
  // const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || ProfileImage;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s`}
      meta={[
        {
          property: `og:title`,
          content: metaTitle,
        },
        // {
        //   property: `og:description`,
        //   content: metaDescription,
        // },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        // {
        //   name: `twitter:description`,
        //   content: metaDescription,
        // },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  // description: ``,
};

SEO.propTypes = {
  // description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
