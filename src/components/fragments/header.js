import React, { useState } from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"
import Didactvs from "../../images/logo/didactvs.webp"

const Header = ({ siteTitle }, props) => {
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
    <header className="px-6 py-5">
      <div className="columns">
        <div className="menu-bars column is-flex is-justify-content-center is-align-items-flex-start" onClick={toggle}>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <figure className="column is-flex is-justify-content-center is-align-items-center	">
          <img src={Didactvs} alt="lorem" className="logo" />
        </figure>
        <div className="column is-flex is-align-items-center is-justify-content-flex-end">
          <button>Dark mode</button>
        </div>
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
