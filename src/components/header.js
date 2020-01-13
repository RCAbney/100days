import { Link } from "gatsby"

import React from "react"
import Image from "../components/image"

const Header = () => (
  <header>
    <nav>
      <Link to="/">
        <Image />
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
