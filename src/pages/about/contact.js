import React from "react"
import ContactForm from "../../components/contactForm"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="resume">
      <ContactForm />
    </section>
  </Layout>
)

export default Contact
