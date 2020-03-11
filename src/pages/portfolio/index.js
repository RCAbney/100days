import React from "react"
import PortfolioList from "../../components/portfolioList"
import useWorks from "../../hooks/useWorks"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const PortfolioPage = () => {
  const works = useWorks()

  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className="intro">
        <h1>Portfolio</h1>
      </div>
      <PortfolioList works={works} />
    </Layout>
  )
}

export default PortfolioPage
