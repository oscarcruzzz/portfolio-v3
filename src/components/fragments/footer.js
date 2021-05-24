import React from 'react';
import Didactvs from "../../images/logo/didactvs.webp"
const footer = () => {
    return (
        <footer>
            <div className="top-container">
                <figure>
                    <img src={Didactvs}/>
                </figure>
            </div>
            <div className="container">
                <div className="footer-links">
                    <ul>
                        <li className="list-top">Portfolio</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                    </ul>
                    <ul>
                        <li className="list-top">Blog</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                    </ul>
                </div>
                <div className="footer-newsletter">
                    <h3>Would you like to receive weekly posts notifications?</h3>
                    <form>
                        <input type="text"/>
                        <input type="button" className="main-button" value="Send"/>
                    </form>
                </div>
            </div>
            <div className="bottom-container">
            Copyright © 2021 Didactvs All rights reserved.
            </div>
        </footer>
    );
}

export default footer;
