import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

const ContactForm = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  return (
    <Formik
      initialValues={{ fullName: "", email: "", comment: "" }}
      validationSchema={Yup.object({
        fullName: Yup.string().required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required"),
        comment: Yup.string()
          .max(240, "Must be 240 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        fetch("/?no-cache=1", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contact",
            ...values,
          }),
        })
          .then(() => {
            alert("success!")
            setSubmitting(false)
          })
          .catch(error => {
            alert("wrongo!")
            setSubmitting(false)
          })
      }}
    >
      <Form
        className="form-contact"
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label htmlFor="fullName">Your Name</label>
        <Field name="fullName" type="text" />
        <ErrorMessage name="fullName" render={msg => <div>{msg}</div>} />

        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" render={msg => <div>{msg}</div>} />

        <label htmlFor="comment">Leave a Comment</label>
        <Field name="comment" as="textarea" rows="6" />
        <ErrorMessage name="comment" render={msg => <div>{msg}</div>} />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default ContactForm
