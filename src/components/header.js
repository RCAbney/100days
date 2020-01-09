import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav-wrapper">
      <Link to="/">
        <Image />
      </Link>

      <ul className="navbar">
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/posts/">Posts</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
