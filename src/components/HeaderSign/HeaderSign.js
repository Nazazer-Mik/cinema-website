import React from 'react';
import "./HeaderSign.css"

function HeaderSign (props){

    return (
        <h2 className="header-sign">
            {props.text}
        </h2>
    );
}

export default HeaderSign;