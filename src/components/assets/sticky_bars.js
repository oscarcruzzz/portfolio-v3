import React, {useState} from 'react';
import Facebook from '../../images/icons/facebook.svg'
import Instagram from '../../images/icons/instagram.svg'
import Linkedin from '../../images/icons/linkedin.svg'

const Sticky_bars = () => {
    const [showStickyMenu, setShowStickyMenu] = useState(false)
    const sticky_toggle = () => {
        setShowStickyMenu(!showStickyMenu)
        let nav = document.querySelector(`nav`)
        if (showStickyMenu != null) {
          nav.className = "open-menu"
        } else {
          nav.className = ""
        }
      }
    return (
        <div className="sticky_bars">
            <div className="xs-text" onClick={sticky_toggle}>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h6>Menu</h6>
            </div>
            <ul className="media-icons">
                <li><img src={Facebook}/></li>
                <li><img src={Instagram}/></li>
                <li><img src={Linkedin}/></li>
            </ul>
        </div>
    );
}

export default Sticky_bars;
