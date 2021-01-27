import React, { useState } from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"
import Didactvs from "../images/logo/didactvs-letters.webp"

const Header = ({ siteTitle }) => {
  const [menuActive, setMenuState] = useState(false)

  return (
    <header>
      <div className="bars">
        <svg
          viewBox="0 0 800 600"
          className={menuActive ? `open` : ``}
          onClick={() => setMenuState(!menuActive)}
        >
          <path
            d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
            className="top_bar"
          />

          <path d="M300,320 L540,320" className="middle_bar" />

          <path
            d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
            className="bottom_bar"
            transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
          />
        </svg>
      </div>
      <div>
        <figure>
          <img src={Didactvs} alt="lorem" className="logo"/>
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
