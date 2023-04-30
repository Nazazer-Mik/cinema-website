import React from 'react';
import './SignField.css'

function SignField (props) {



    return (
        <div className='field-section'>
            <label htmlFor={props.type}>{props.name}</label>
            <input type={props.type} id={props.type} placeholder={props.example} required/>
        </div>
    );
}

export default SignField;