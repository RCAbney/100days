exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      blogposts: allMdx(
        filter: { fileAbsolutePath: { glob: "**/src/posts/*" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      portfolio: allMdx(
        filter: { fileAbsolutePath: { glob: "**/src/portfolio/*/*.mdx" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.blogposts.nodes

  posts.forEach(post => {
    actions.createPage({
      path: `/posts/${post.frontmatter.slug}`,
      component: require.resolve("./src/components/blogpost.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })

  const works = result.data.portfolio.nodes

  works.forEach(work => {
    actions.createPage({
      path: `/portfolio/${work.frontmatter.slug}`,
      component: require.resolve("./src/components/portfolioItem.js"),
      context: {
        slug: work.frontmatter.slug,
      },
    })
  })
}
