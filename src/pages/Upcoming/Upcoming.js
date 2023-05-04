import React, { useEffect, useRef } from 'react';
import './Upcoming.css'
import MovieBlock from "../../components/MovieBlock/MovieBlock.js"
import { movies } from '../Home/list';
import VotingLine from '../../components/VotingLine/VotingLine.js';

function Upcoming () {
    let contRef = useRef();
    let threemovies = movies.filter(m => m.location === 'soon').map((m) => <MovieBlock data={m}/>);
    
    let threeMovies = (
                <div className='three-top-movies'>
                    {threemovies}
                </div>
    );

    return (
        <div className='upcoming'>
            <div className='vote-container' ref={contRef}>
                <h1> Breaking the time frames. . .</h1>
                {threeMovies}
                <VotingLine first={5} second={4} third={7}/>
            </div>
        </div>
    );
}

export default Upcoming;