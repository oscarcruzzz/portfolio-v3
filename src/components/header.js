import React, { useState } from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"
import Didactvs from "../images/logo/didactvs-letters.webp"

const Header = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = useState(false)
  const toggle = () => {
    setShowMenu(!showMenu)
    let nav = document.querySelector(`nav`)
    if (showMenu != null) {
      nav.className = "open-menu"
    } else {
      nav.className = ""
    }
  }
  return (
    <header>
      <div className="menu-bars" onClick={toggle}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div>
        <figure>
          <img src={Didactvs} alt="lorem" className="logo" />
        </figure>
      </div>
      <div>
        <button>Dark mode</button>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
