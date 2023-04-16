import React from 'react';
import './MiddleHeader.css'
import CitiesSelector from './CitiesSelector.js'

function MiddleHeader (props) {
    return (
        <div className='middle-box'>
            <div className='inner-block'>
                <div className='padding-box'>
                    <div>
                        <h2 className='text-top-special'>
                            Why
                            <font style={{color: '#FFC300', textShadow: '1px 1px 2px #242423'}}>Not</font>
                        </h2>
                        <font className='text-right-special'>.cinema</font>
                    </div>
                    <div className='sort-options'>
                        <font id = 'page-day' className='date-box'>Today </font> in 
                        <CitiesSelector PassCity={props.PassCity}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiddleHeader;