import React, {useState} from 'react';

const Nav = () => {
    const [hideMenu, setHideMenu] = useState(false);
    const toggle = () => {
        setHideMenu(!hideMenu)
        let nav = document.querySelector(`nav`)
        if (hideMenu != null) {
            nav.className = ""
        } else {
          nav.className = "open-menu"
        }
      }
    return (
        <nav>
            <span onClick={toggle} role="button">X</span>
            <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
            </ul>
        </nav>
    );
}

export default Nav;