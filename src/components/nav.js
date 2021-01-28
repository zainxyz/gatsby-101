import React from "react"
import { Link } from "gatsby"

import styles from "./nav.module.css"

const Nav = ({ items = [], title = "Gatsby 101" }) => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.homeLink}>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      <ul className={styles.navContainer}>
        {items.map(item => {
          return (
            <li className={styles.navItem} key={item.title}>
              <Link to={item.to}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

export default Nav
