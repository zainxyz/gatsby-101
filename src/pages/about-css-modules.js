import React from "react"

import Container from "../components/container"
import Header from "../components/header"

import styles from "./about-css-modules.module.css"

console.log(styles)

const User = ({ avatar, excerpt, username }) => {
  return (
    <div className={styles.user}>
      <img src={avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{username}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </div>
  )
}

const AboutCSSModules = () => {
  return (
    <Container>
      <Header title="About CSS Modules" />
      <p>CSS Modules are cool, no?</p>
      <User
        username="Maria Randall"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Daniela Dewitt"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
        excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  )
}

export default AboutCSSModules
