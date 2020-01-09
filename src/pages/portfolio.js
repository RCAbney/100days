import React from "react"
import { Link } from "gatsby"
import useWorks from "../hooks/useWorks"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => {
  const works = useWorks()

  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1>Portfolio</h1>
      {works.map(work => (
        <>
          <Link to={`portfolio/${work.slug}`}>
            <h2 className="post-title">{work.title}</h2>
          </Link>
          <hr />
        </>
      ))}
    </Layout>
  )
}

export default PortfolioPage
