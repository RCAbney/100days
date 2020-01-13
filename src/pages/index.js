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
      <div className="posts-list">
        <h1>100 Days of Gatsby ... and More!</h1>
        {posts.length === 0 ? (
          <h2>No Posts Yet WTF?</h2>
        ) : (
          <h2>Latest Posts</h2>
        )}
        {posts.map(post => (
          <>
            <Link to={`posts/${post.slug}`}>
              <h2 className="post-title">{post.title}</h2>
            </Link>
            <p className="post-author">
              Posted by {post.author} - {post.date}
            </p>
            <p>{post.excerpt}</p>
            <hr />
          </>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
