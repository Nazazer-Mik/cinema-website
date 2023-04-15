import React from 'react';
import './MovieBlock.css'

function MovieBlock (props) {

    let movieBlock = {
        backgroundImage: 'url(' + props.imgPath +')',
        height: window.innerHeight/2.5,
        width: (window.innerWidth*0.88)/3
    }

    return (
        <div className='movie-block' style={movieBlock}>
            <div className='wrap'>
                <div className='description-block'>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieBlock;