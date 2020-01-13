import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer>
    <div className="footer-content">
      <Link to="/" className="footer-link">
        © {new Date().getFullYear()}
        {` `}RCAbney
      </Link>
    </div>
  </footer>
)

export default Footer
