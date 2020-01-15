import { Link } from "gatsby"

import React from "react"
import LogoImage from "../components/logoImage"

const Header = () => (
  <header>
    <nav>
      <Link to="/">
        <LogoImage />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/portfolio/">Portfolio</Link>
        </li>
        <li>
          <Link to="/posts/">Posts</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
