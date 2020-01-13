import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "./seo"
import Layout from "./layout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

const PortfolioItemTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <article className="post">
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer className="post">{post.body}</MDXRenderer>
      <Link to="/">Back to the front!</Link>
    </article>
  </Layout>
)

export default PortfolioItemTemplate
