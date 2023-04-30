import React, { useState } from 'react';
import './Home.css'
import MovieBlock from '../../components/MovieBlock/MovieBlock.js'
import History from '../../components/History/History.js'
import {movies, currentDate} from './list.js'
import { getDate } from '../../components/Header/useful';

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

    if (movies.filter(movie => movie.location === currentCity && movie.date >= currentDate).length === 0)
        return <h2 className='sad-sign'>Unfortunately, there are no movies in this area at the moment...<br/>Please try choosing another location.</h2>

    let date = null;
    movies.sort(compareTimes).forEach(e => 
        {
            if (e.location !== currentCity || e.date < currentDate)
                return;

            if (date?.toString() !== e.date.toString())
            {
                date = e.date;
                let dateStr;
                const tomorrow = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);

                if (date.toString() === currentDate.toString())
                    dateStr = 'Today';
                else if (date.toString() === tomorrow.toString())
                    dateStr = 'Tomorrow';
                else
                    dateStr = getDate(date);

                moviesArray.push(
                <div className='date-container'>
                    <div className="line-itself first"></div>
                    <div className='date-line'>{dateStr}</div>
                    <div className="line-itself"></div>
                </div>);
            }
            
            moviesArray.push(<MovieBlock data = {e}/>);
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
            <div className='history-button' id = 'history-button-in' onClick={OpenModWindow}>
                Show
                <font className='history-word'>History</font> 
                screenings . . .
            </div>
            <History />
        </div>
    );
}

document.addEventListener("scroll", event => {
    let dateBox = document.getElementById("page-day");
    let sections = document.getElementsByClassName("date-container");
    let emptySpace = document.getElementById("empty-space");
    let dateBoxStr = "Today";

    for (let e of sections)
    {
        if (window.scrollY + emptySpace.scrollHeight*1.5 >= e.getBoundingClientRect().y + window.pageYOffset)
            dateBoxStr = e.innerText;
    }

    dateBox.innerText = dateBoxStr;
});

let OpenModWindow = () => {
    document.getElementById('history-canvas')?.classList.add('active');
    document.body.style.overflow = "hidden";
};

export default Home;