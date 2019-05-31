import React from "react"

import Bio from "./bio/Bio"
import TechStack from "./techstack/TechStack"

function About() {
  return(
    <div className="about">
      <h1>Hello ABOUT!</h1>
      <Bio />
      <TechStack />
    </div>
  )
}

export default About
