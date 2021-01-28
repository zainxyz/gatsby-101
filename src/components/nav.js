import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import styles from "./nav.module.css"

const Nav = ({ items = [] }) => {
  // `use`Hooks
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: { title },
    },
  } = data

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

// const MyNav = props => {
//   /**
//    * StaticQuery for Components where as PageQuery for Pages
//    */
//   return (
//     <StaticQuery
//       query={graphql`
//         query {
//           site {
//             siteMetadata {
//               title
//             }
//           }
//         }
//       `}
//       render={data => <Nav data={data} {...props} />}
//     />
//   )
// }
//
// export default MyNav
