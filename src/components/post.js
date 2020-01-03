import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <article className="post">
      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer className="post">{post.body}</MDXRenderer>
    </article>
    <Link to="/">Back to the front!</Link>
  </Layout>
)

export default PostTemplate
