import React from "react"
import { Link } from "gatsby"
import usePosts from "../hooks/usePosts"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Latest Posts</h1>
      <p>Alright chums, let's do this.</p>
      {posts.map(post => (
        <>
          <Link to={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          <p>
            Posted by {post.author} - {post.date}
          </p>
        </>
      ))}
    </Layout>
  )
}

export default IndexPage
