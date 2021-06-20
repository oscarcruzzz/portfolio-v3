import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layouts/app"
// import Image from "../components/image"
import SEO from "../components/fragments/seo"
import Slider from "../components/home/slider"
import Aside from "../components/home/aside"
import Counter from "../components/home/counter"
import Skills from "../components/home/skills"
import Testimonials from "../components/home/testimonials"
import Project from "../components/home/project"

//styles
import "../styles/index.sass"

const IndexPage = () => {
  const [showScroll, setScrollState] = useState(false)

  let windowHeight = window.innerHeight;
  console.log(windowHeight);

  const toggleScroll = () => {
    setScrollState(!showScroll)
    document.querySelector("#index").style.overflowY = "visible"
    window.scrollTo({top:windowHeight, behavior: 'smooth'});
  }

  return (
    <Layout>
      <SEO title="Home" id="index"/>

      <div className="main-index px-6">
        <div className="columns is-flex is-align-items-center main-top">
          <Aside />
          <Slider />
        </div>
        <div className="columns main-bottom">
          <div className="aside-social-container column is-4 is-flex">
            <span className="pl-2 vertical-text">Sigueme</span >
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
          <div className="column down-arrow is-flex is-align-items-center is-justify-content-center">
            <span role="button" onClick={toggleScroll}>
              {" "}
              {`>`}{" "}
            </span>
          </div>
        </div>
      </div>
      <Counter />
      <Skills />
      <Testimonials/>
      <Project />
    </Layout>
  )
}

export default IndexPage
