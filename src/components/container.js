import React, { useMemo } from "react"

import styles from "./container.module.css"
import Nav from "./nav"

const Container = props => {
  const { children } = props

  const items = useMemo(
    () => [
      {
        to: "/",
        title: "Home",
      },
      {
        to: "/about",
        title: "About",
      },
      {
        to: "/contact",
        title: "Contact",
      },
    ],
    []
  )

  return (
    <div className={styles.container}>
      <Nav items={items} />
      {children}
    </div>
  )
}

export default Container
