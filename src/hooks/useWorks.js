import { graphql, useStaticQuery } from "gatsby"

const useWorks = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/src/portfolio/*/*.mdx" } }
        sort: { fields: [frontmatter___post_index], order: ASC }
      ) {
        nodes {
          frontmatter {
            title
            slug
            tags
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 500
                  maxHeight: 500
                  traceSVG: { color: "#6c8b6b" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(work => ({
    title: work.frontmatter.title,
    slug: work.frontmatter.slug,
    tags: work.frontmatter.tags,
    image: work.frontmatter.image,
  }))
}

export default useWorks
