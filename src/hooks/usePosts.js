import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/src/posts/*" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
            author
            slug
          }
          excerpt
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
    readingTime: post.fields.readingTime.text,
  }))
}

export default usePosts
