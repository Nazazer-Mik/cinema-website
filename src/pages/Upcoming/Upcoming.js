import React from 'react';
import './Upcoming.css'
import MovieBlock from "../../components/MovieBlock/MovieBlock.js"
import { movies, availability } from '../Home/list';

function Upcoming () {

    let threemovies = movies.filter(m => m.location === 'soon').map((m) => <MovieBlock data={m}/>);

    return (
        <div className='upcoming'>
            <div className='vote-container'>
                <h1> Breaking the time frames. . .</h1>
                <div className='three-top-movies'>
                    {threemovies}
                </div>
            </div>
        </div>
    );
}

export default Upcoming;