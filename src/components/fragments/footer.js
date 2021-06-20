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
            <div className="columns container m-auto">
                <div className="column is-half columns footer-links py-5">
                    <ul className="column is-two-fifths is-flex is-flex-direction-column">
                        <li className="list-top">Portfolio</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                    </ul>
                    <ul className="column is-two-fifths is-flex is-flex-direction-column">
                        <li className="list-top">Blog</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                    </ul>
                </div>
                <div className="footer-newsletter column is-half">
                    <h3 className="montserrat has-text-weight-bold mb-5 is-size-5">Would you like to receive weekly posts notifications?</h3>
                    <form>
                        <input type="text"/>
                        <input type="button" className="main-button" value="Send"/>
                    </form>
                </div>
            </div>
            <div className="bottom-container open is-size-6 py-4 has-text-centered">
            Copyright © 2021 Didactvs All rights reserved.
            </div>
        </footer>
    );
}

export default footer;
