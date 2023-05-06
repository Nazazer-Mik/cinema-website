import React, { useRef, useState } from 'react';
import './Upcoming.css'
import MovieBlock from "../../components/MovieBlock/MovieBlock.js"
import { movies } from '../Home/list';
import VotingLine from '../../components/VotingLine/VotingLine.js';
import { suggestions } from './suggestions';
import { getDate, getTime } from '../../components/Header/useful';

function Upcoming () {
    let contRef = useRef();
    let threemovies = movies.filter(m => m.location === 'soon').map((m) => <MovieBlock data={m}/>);
    let user  = sessionStorage.getItem("authorized");
    let [suggs, setSuggs] = useState([...suggestions]);

    let threeMovies = (
                <div className='three-top-movies'>
                    {threemovies}
                </div>
    );

    let genSuggestions = (e) => {

        return (
            <div className='suggestion-block'>
                <img src='./images/user.png' alt='user-avatar'/>
                <h3>
                    <div className='dot'></div>
                    {e.username} 
                    <div className='dot'></div> 
                    <font style={{color: "#C4CCCF"}}>
                        {getDate(e.date)}
                        <div className='dot'></div>
                        {getTime(e.date)}
                    </font>
                </h3>
                <p>{e.suggestion}</p>
            </div>
        );
    }

    let checkSuggs = () => {
            if (suggs.length === 0)
                return <h3>Seems like noone left a suggestion yet...</h3>
            else
                return suggs.map((s) => genSuggestions(s));
    }

    let postSuggestion = () => {
        let newSuggestion = 
        {
            username: user,
            date: new Date(Date.now()),
            suggestion: document.getElementById('comment-body')?.value
        }
        
        suggestions.push(newSuggestion);
        if (suggs.length !== suggestions.length)
            setSuggs(suggestions);
    }

    let suggestionField = () => {        
        if (user != null)
        {
            return (
                <>
                    <h3 style={{display: "block"}} className='cm'>Leave a suggestion</h3>
                    <textarea placeholder='Review...' className='comment-body' id ='comment-body'/>
                    <div className='sign-button' onClick={postSuggestion}>Create</div>
                </>
            )
        }
        else
            return <h3 style={{display: "block"}} className='cm'>Please, log in to create a suggestion.</h3>
    }

    return (
        <div className='upcoming'>
            <div className='vote-container' ref={contRef}>
                <h1> Breaking the time frames. . .</h1>
                {threeMovies}
                <VotingLine votes={{first: 5, second: 4, third: 7}}/>
                <div className='vote-description'>
                    <h2>What is this survey about?</h2>
                    <p>
                        People like watching new movies, following new releases, while most of the cinemas
                        supports this tradition and are showing only the latest content. Our idea is to say <span className='underline'>  WhyNot </span>
                        to show legendary old hits from time to time! On this page you can find the "Barn on backyard" section below, where people 
                        leave their wish lists. We carefully collect those information, using the AI algorithms to see which movies are wanted the most
                        and carry out it to the top of the page for final vote. Thus, the most desired film is being selected and shown later during the week.</p>
                        <p style={{color: '#f5f5f5'}}>So, <span className='underline'> WhyNot </span> to take part in our democracy community atcivity?
                    </p>
                </div>
                <div className='barn-container'>
                    <h2>Barn on backyard   👋</h2>
                    {checkSuggs()}
                    {suggestionField()}
                </div>
            </div>
        </div>
    );
}

export default Upcoming;