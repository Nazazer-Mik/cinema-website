import React from 'react';
import './MoviePage.css'
import { availability } from '../../pages/Home/list';
import { getDate } from '../Header/useful';

function MoviePage (props) {
    let movie = props.movie;

    let pasteTimes = (arr) => {
        const options = {
            month: 'long'
        }

        console.log(arr);
        return (
            <tr>
                <td>{arr[0].getDate()} of {arr[0].toLocaleDateString("en-US", options)}</td>
                {arr.map(e => <td>{e.getHours()}:{(e.getMinutes() === 0) ? '00' : e.getMinutes()}</td>)}
            </tr>
        );
    }

    let findObj = (e) => e.title === movie.title;

    window.scrollTo(0, 0);
    
    return (
        <>
        <div className='movie-page-container'>
            <h1>{movie.title}</h1>
            <div className='trailer-flex-container'>
            <iframe width="1920" height="1080" src={movie.trailerLink} 
            title={movie.trailerTitle} 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='ticket-box'>
                <div className='ticket-button'>Buy Tickets</div>
                <h3>Available dates and times:</h3>
                <table>
                    {availability.find(findObj).availableOn.map(arr => pasteTimes(arr))}
                </table>
            </div>
            </div>
        </div>
        <div className='description-block-movie'>
            <h2>Would you like to know more about movie?</h2>
            <div className='description'>
                <div className='time-info'>
                    <div style={{display: "inline-block"}}>
                        <h3>Release date:</h3>
                        <img src='./images/calendar.png'/> <span> {getDate(movie.releaseDate)}</span>
                    </div>
                    <div style={{display: "inline-block"}}>
                        <h3>Duration:</h3>
                        <img src='./images/clock.png'/> <span> {movie.runningTime} minutes</span>
                    </div>
                </div>
                <p className='description-text'>{movie.detailedDescription}</p>
            </div>
            <img src={movie.descImg} alt={movie.title}/>
            <div className='other-info'>
                <hr/>
                <font style={{color: "#f5f5f5"}}>Director: </font>{movie.director}<br/>
                <hr/>
                <font style={{color: "#f5f5f5"}}>Cast: </font>{movie.cast}
            </div>
        </div>
        </>
    );
}

export default MoviePage;