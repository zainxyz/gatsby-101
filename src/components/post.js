import React from "react"

import { rhythm } from "../utils/typography"

const Post = ({ excerpt, date, title, id }) => {
  return (
    <div key={id}>
      <h4 style={{ marginBottom: `${rhythm(1 / 4)}` }}>
        {title} <span style={{ color: "#bbb" }}>- {date}</span>
      </h4>
      <p>{excerpt}</p>
    </div>
  )
}

export default Post
