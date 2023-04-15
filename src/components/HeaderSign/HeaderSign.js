import React from 'react';
import { Link } from 'react-router-dom'
import "./HeaderSign.css"

function HeaderSign (props){

    return (
        
        <Link to={props.path} className='sign-wrapper'>
            <img src = {props.imgPath} alt = {props.text + " icon"}/>
            <div><div className='img-shadow'></div></div>
            <h2 className={'header-sign'}>
                {props.text}
            </h2>
        </Link>
    );
}

export default HeaderSign;