import React from 'react';
import './MovieBlock.css'
import { Link } from 'react-router-dom';

function GetImages(images)
{
    if (!Array.isArray(images))
        return;
        
    let arrayImages = [];
    images.forEach(e => arrayImages.push(<img src = {'./images/technologies/' + e + '.png'} alt = {e} />));

    return arrayImages;
}

function MovieBlock (props) {

    let movieBlock = {
        backgroundImage: 'url(' + props.data.imgPath +')',
        height: window.innerHeight/2.5,
        width: (window.innerWidth*0.88)/3
    };

    return (
        <Link to={'/' + props.data.title.toLowerCase().replaceAll(' ', '-')}>
            <div className='movie-block' style={movieBlock}>
                <div className='wrap'>
                    {GetImages(props.data.technologies)}
                    <div className='description-block'>
                        <h3>{props.data.title}</h3>
                        <p>{props.data.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default MovieBlock;