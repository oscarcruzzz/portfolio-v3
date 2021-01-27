import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Slider from "../components/slider"
import Aside from "../components/aside"
import "../styles/index.sass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index-main">
      <Aside />
      <Slider />
      <div className="down-arrow">
        <span role="button"> {`>`} </span>
      </div>
    </div>
  </Layout>
)

export default IndexPage
