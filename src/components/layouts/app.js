/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Sticky from "../assets/sticky_bars"
import Nav from "../fragments/nav"
import Header from "../fragments/header"
import Footer from "../fragments/footer"
import "../../styles/config.sass"

import '../../styles/bulma/bulma.min.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Sticky/>
      <main>
        <Nav />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Sticky />
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
