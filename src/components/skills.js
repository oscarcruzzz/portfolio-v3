import React from "react"
import Skill from "../components/assets/skill"
const Skills = () => {
  return (
    <section className="skills">
      <div className="tab-header container">
        <ul>
          <li>Web</li>
          <li>Desktop</li>
          <li>Mobile</li>
          <li>Design</li>
        </ul>
      </div>
      <div className="container tab-container">
        <h2 className="section-title">Skills</h2>
        <div className="tab-content">
          <div id="">
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
          </div>
          <div id=""></div>
          <div id=""></div>
          <div id=""></div>
        </div>
      </div>
    </section>
  )
}

export default Skills
