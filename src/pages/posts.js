import React from "react"
import { Link } from "gatsby"
import usePosts from "../hooks/usePosts"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title="Posts" />
      <div className="posts-list">
        {posts.length === 0 ? (
          <h1>No Posts Yet WTF?</h1>
        ) : (
          <h1>Latest Posts</h1>
        )}
        {posts.map(post => (
          <>
            <Link to={`posts/${post.slug}`}>
              <h2 className="post-title">{post.title}</h2>
            </Link>
            <p className="post-author">
              Posted by {post.author} - {post.date}
            </p>
            <p>
              {post.excerpt} <Link to={`posts/${post.slug}`}>...more</Link>
            </p>
            <hr />
          </>
        ))}
      </div>
    </Layout>
  )
}

export default PostsPage
