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
        Howdy, I'm Ryan, I've been making cool stuff out of pixels for a long
        time now.
      </p>
      <p>
        I got my first computer as a kid, an old Apple IIc, and it was there
        that I developed a love for making things.
      </p>
      <p>
        I'm also a former sailor, I've been completely around the world. My
        first lap was completed before I turned twenty. I spent six years in the
        service and got to see a lot of amazing places and people.
      </p>
      <p>
        After I got out, I got one of those 'real jobs' and blinked as ten years
        went by. Funny how that happens. Anyways, the recession hits and while
        we're all miserable, watching our 401k's plummet, I asked myself a
        simple question.
      </p>
      <p>
        <em>Why am I doing this?</em>
      </p>
      <p>
        I loved making things, and by things I don't mean pivot tables.
        (Apologies to any excel-lovers out there.) I took some time to reflect
        about things that I enjoyed doing, and it all came back to making stuff
        on the old computer. So I decided to career change. I had all this GI
        Bill money from the service waiting for me and it was time to put it to
        use.
      </p>
      <p>
        Since then I've worked at a couple of really big companies in addition
        to freelance work.
      </p>
      <p>
        I'm currently looking for my next opportunity. If you made it this far
        and would like to <Link to="/about/resume/">check out my resume</Link>{" "}
        that'd be great.
      </p>
    </section>
  </Layout>
)

export default About
