import React, {useState} from 'react';
import {Link} from "gatsby";

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
            <span onClick={toggle} role="button">{'<-'}</span>
            <ul>
                <li><Link to="/projects">My Portfolio</Link></li>
                <li><Link>Expertise</Link></li>
                <li><Link>Contact Me</Link></li>
                <li><Link>Blog</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;