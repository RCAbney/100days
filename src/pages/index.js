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
        <h1>Hello There!</h1>
        <h2>From the Blog: Latest Posts</h2>
        {posts.map(post => (
          <>
            <Link to={`posts/${post.slug}`}>
              <h2 className="post-title">{post.title}</h2>
            </Link>
            <p className="post-author">
              Posted by {post.author} - {post.date} - {post.readingTime}
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
