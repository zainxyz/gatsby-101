import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

const Contact = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Header title="Drop me a line" />
      <p>Get in touch with me!</p>
    </div>
  )
}

export default Contact
