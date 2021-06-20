import React from "react"
import Skill from "../assets/skill"
const Skills = () => {
  return (
    <section className="columns section">
      <h2 className="section-title column is-2 border-font-vertical">Skills</h2>
      <div className="column">
        <div className="tab-header is-10 columns">
          <ul className="column is-11 is-flex is-justify-content-flex-end tab-nav">
            <div className="tab-nav-items is-flex pb-2">
              <li className="mx-4 is-size-4 is-clickable">Web</li>
              <li className="mx-4 is-size-4 is-clickable">Desktom</li>
              <li className="mx-4 is-size-4 is-clickable">Mobile</li>
              <li className="mx-4 is-size-4 is-clickable">Design</li>
            </div>
          </ul>
        </div>
        <div className="tab-container container">
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
      </div>
    </section>
  )
}

export default Skills
