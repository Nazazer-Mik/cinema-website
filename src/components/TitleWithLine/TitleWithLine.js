import React from 'react';

function TitleWithLine (props) {
    return (
        <div className='help-title'>
            <h2>{props.message}</h2>
            <div className='line-itself'/>
        </div>
    );
}

export default TitleWithLine;