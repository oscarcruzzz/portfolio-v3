import React from 'react';
import Facebook from '../../images/icons/facebook.svg'
import Instagram from '../../images/icons/instagram.svg'
import Linkedin from '../../images/icons/linkedin.svg'

const sticky_bars = () => {
    return (
        <div className="sticky_bars">
            <div className="xs-text">
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

export default sticky_bars;
