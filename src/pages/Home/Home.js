import React, { useState } from 'react';
import './Home.css'
import MovieBlock from '../../components/MovieBlock/MovieBlock.js'
import {movies} from './list.js'

function getMovies (currentCity)
{
    let moviesArray = [];

    const compareTimes = (a, b) => {
        if (a.date > b.date)
            return 1;
        else if (a.date < b.date)
            return -1;
        else
            return 0;
    };

    if (movies.filter(movie => movie.location === currentCity).length === 0)
        return <h2 className='sad-sign'>Unfortunately, there are no movies in this area at the moment...<br/>Please try choosing another location.</h2>

    let date = null;
    movies.sort(compareTimes).forEach(e => 
        {
            if (date !== e.date)
            {
                date = e.date;
                moviesArray.push(<legend>{date.getDate()}.{date.getMonth()}.{date.getFullYear()}</legend>);
            }

            if (e.location === currentCity)
                moviesArray.push(<MovieBlock imgPath={e.imgPath} technologies={e.technologies} title={e.title} description={e.description}/>);
        });

    return moviesArray;
}

function Home (props) {

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