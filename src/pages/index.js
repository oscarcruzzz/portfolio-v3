import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Slider from "../components/slider"
import Aside from "../components/aside"
import Counter from "../components/counter"
import "../styles/index.sass"
import Skills from "../components/skills"

const IndexPage = () => {
  const [showIndex, setIndexState] = useState(false)

  const toggleIndex = () => {
    setIndexState(!showIndex)
    document.querySelector("html").style.overflowY = "visible"
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div className="index-main">
        <Aside />
        <Slider />
        <div className="down-arrow">
          <span role="button" onClick={toggleIndex}>
            {" "}
            {`>`}{" "}
          </span>
        </div>
        <div className="aside-social-container">
          <span>Sigueme</span>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/oscar-cruz-b48b73b6/"
                target="_blank"
              >
                Linkein
              </a>
            </li>
            <li>
              <a href="https://github.com/oscarcruzzz" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/rackzoothe" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cruz.oscarr_ux/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Counter />
      <Skills/>
    </Layout>
  )
}

export default IndexPage
