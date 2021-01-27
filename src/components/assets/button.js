import React from 'react';
import {Link} from 'gatsby'

const button = (data) => {
    return (
        <Link to={data.route} className="main-button">
            {data.text}
        </Link>
    );
}

export default button;
