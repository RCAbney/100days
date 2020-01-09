import { Link } from "gatsby"

import React from "react"
import Image from "../components/image"

const Header = () => (
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
          <Link to="/portfolio/">Portfolio</Link>
        </li>
        <li>
          <Link to="/posts/">Posts</Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
