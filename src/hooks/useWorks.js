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
            author
            slug
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map(work => ({
    title: work.frontmatter.title,
    author: work.frontmatter.author,
    slug: work.frontmatter.slug,
    excerpt: work.excerpt,
  }))
}

export default useWorks
