import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Ryan is a cool dude</h1>
    <p>He has decided to do the #100daysofgatsby challenge.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
