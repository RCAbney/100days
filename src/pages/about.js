import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="resume">
      <h1>About Me</h1>
      <p>
        Confident, versatile detail-oriented front-end developer skilled in
        researching and developing new production workflows. Previously a key
        figure in transitioning a billion-dollar publisher from Flash
        advertising to an HTML5 based workflow. Prior experiences include
        project management, information design, and military service.
      </p>
      <h2>Technical Skills</h2>
      <div className="skills">
        <div className="skillset">
          <h3>Languages</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>JavaScript (ES6)</li>
          </ul>
        </div>
        <div className="skillset">
          <h3>Frameworks &amp; Libraries</h3>
          <ul>
            <li>Bootstrap</li>
            <li>Foundation</li>
            <li>React</li>
            <li>Gatsby</li>
          </ul>
        </div>
        <div className="skillset">
          <h3>CMS</h3>
          <ul>
            <li>WordPress</li>
            <li>Sitecore</li>
            <li>Kentico</li>
          </ul>
        </div>
        <div className="skillset">
          <h3>Tools</h3>
          <ul>
            <li>Adobe CC</li>
            <li>Git</li>
          </ul>
        </div>
      </div>

      <h2>Experience</h2>
      <h3>Ascension St. Vincent — Analyst - Technology (Contingent)</h3>
      <p>Jun 2016 - Dec 2019</p>
      <ul>
        <li>
          Designed and developed sites for Ascension’s foundations, residency
          programs, and fellowships.
        </li>
        <li>
          Consolidated 30+ stand-alone websites into St. Vincent's main site.
        </li>
        <li>Developed WordPress microsites for St. Vincent's partners.</li>
        <li>
          Worked with third-party vendors to launch St. Vincent's online
          provider finder, and developed an application that pulls data from
          their API to display provider rosters on St. Vincent's websites.
        </li>
      </ul>

      <h3>Gannett — Digital Media Designer II</h3>
      <p>FEB 2013 - JAN 2016</p>
      <ul>
        <li>
          Designed landing pages and email blasts for white glove clients.
        </li>
        <li>
          Created HTML5 ad units that featured advanced interactivity such as
          games, videos, and event reporting.
        </li>
        <li>Developed a library that automated repetitive animations.</li>
        <li>Refactored legacy jQuery code into vanilla JavaScript.</li>
        <li>Performed QA checks on junior artist ads.</li>
      </ul>

      <h3>Fusework Studios —Graphic and Web Design Intern</h3>
      <p>JUN 2012 - AUG 2012</p>
      <ul>
        <li>Created WordPress site mock-ups for client presentations.</li>
        <li>
          Wrote blog posts, designed infographics, and prepared sales materials.
        </li>
      </ul>
      <h2>Education</h2>
      <h3>Ivy Tech Community College — A.A.S. - Visual Communications</h3>
      <p>JAN 2010 - DEC 2012</p>
      <p>Concentration in Web Design.</p>
      <ul>
        <li>3.96 GPA - Phi Theta Kappa Honor Society Member</li>
      </ul>
    </section>
  </Layout>
)

export default SecondPage
