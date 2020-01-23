import React from "react"
import { Link } from "gatsby"
import Twitter from "../images/twitter.svg"
import Github from "../images/github.svg"
import LinkedIn from "../images/linkedin.svg"

const Footer = () => (
  <footer>
    <div className="footer-content">
      <Link to="/" className="footer-link">
        © {new Date().getFullYear()}
        {` `}RCAbney
      </Link>
      <ul class="social-links">
        <li>
          <a href="https://twitter.com/rcabney">
            <img src={Twitter} alt="twitter logo" />
          </a>
        </li>
        <li>
          <a href="https://github.com/rcabney">
            <img src={Github} alt="github logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ryanabney/">
            <img src={LinkedIn} alt="linkedin logo" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
