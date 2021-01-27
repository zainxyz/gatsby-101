import React from "react"

const Header = props => {
  const { title } = props

  return title && <h1>{title}</h1>
}

export default Header
