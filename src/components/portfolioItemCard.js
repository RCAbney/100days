import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import WorkTags from "./worktags"

const PortfolioItemCard = ({ image, title, excerpt, tags, slug }) => {
  return (
    <div className="card">
      <Link to={`portfolio/${slug}`}>
        <Image fluid={image.sharp.fluid} className="folio-image" alt={title} />
      </Link>
      <div className="folio-details">
        <h2>
          <Link className="folio-link" to={`portfolio/${slug}`}>
            {title}
          </Link>
        </h2>
        <p>{excerpt}</p>
      </div>
      <WorkTags tags={tags} />
    </div>
  )
}

export default PortfolioItemCard
