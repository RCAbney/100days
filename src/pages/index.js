import React from "react"
import PortfolioList from "../components/portfolioList"
import useWorks from "../hooks/useWorks"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const works = useWorks()

  return (
    <Layout>
      <SEO title="Home" />
      <div className="intro">
        <h1 className="intro-title">
          Ryan Abney,
          <br />
          Front-End Developer and Designer
        </h1>
      </div>
      <PortfolioList works={works} />
    </Layout>
  )
}

export default IndexPage
