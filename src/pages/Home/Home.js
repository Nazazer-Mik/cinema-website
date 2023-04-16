import React, { useState } from 'react';
import './Home.css'
import MovieBlock from '../../components/MovieBlock/MovieBlock.js'
import {movies} from './list.js'

function getMovies (currentCity)
{
    let moviesArray = [];

    movies.forEach(e => 
        {
            if (e.location === currentCity)
                moviesArray.push(<MovieBlock imgPath={e.imgPath} technologies={e.technologies} title={e.title} description={e.description}/>);
        });

    return moviesArray;
}

function Home (props) {
    console.log(props);

    let [city, setCity] = useState('Crawley');
    if (city !== props.city)
        setCity(props.city);

    return (
        <div className='main-block' id = 'main'>
            {getMovies(city)}
        </div>
    );
}

export default Home;