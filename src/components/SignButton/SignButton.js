import React from 'react';
import { Link } from 'react-router-dom'
import './SignButton.css'

function SignButton (props) {
    return (
        <Link to={props.path} className='sign-button'>
            {props.text}
        </Link>
    );
}

export default SignButton;