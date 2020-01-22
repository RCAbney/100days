import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className="resume">
      <h1>About Me</h1>
      <p>
        Howdy, I'm Ryan and here is <Link to="/about/resume">my resume.</Link>
      </p>
    </section>
  </Layout>
)

export default About
