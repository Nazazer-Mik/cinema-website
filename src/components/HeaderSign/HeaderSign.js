import React from 'react';
import "./HeaderSign.css"

function HeaderSign (props){

    return (
        
        <div className='sign-wrapper'>
            <img src = {props.path} alt = {props.text + " icon"}/>
            <div><div className='img-shadow'></div></div>
            <h2 className={'header-sign'}>
                {props.text}
            </h2>
        </div>
    );
}

export default HeaderSign;