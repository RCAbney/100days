import React from "react"
import PortfolioItemCard from "./portfolioItemCard"

const PortfolioList = ({ works }) => {
  return (
    <div className="portfolio">
      {works.map(work => (
        <PortfolioItemCard
          key={work.slug}
          title={work.title}
          image={work.image}
          tags={work.tags}
          excerpt={work.excerpt}
          slug={work.slug}
        />
      ))}
    </div>
  )
}

export default PortfolioList
