import React from 'react';
import './MoviePage.css'
import { availability, reviews} from '../../pages/Home/list';
import { getDate, getTime } from '../Header/useful';

function MoviePage (props) {
    let movie = props.movie;
    
    let pasteTimes = (arr) => {
        const options = {
            month: 'long'
        }

        return (
            <tr>
                <td>{arr[0].getDate()} of {arr[0].toLocaleDateString("en-US", options)}</td>
                {arr.map(e => <td>{e.getHours()}:{(e.getMinutes() === 0) ? '00' : e.getMinutes()}</td>)}
            </tr>
        );
    }

    let loadComments = (c) => {

        return (
            <div className='review-container'>
                <img src='./images/user.png' alt='user-avatar'/>
                <h3>
                    <div className='dot'></div>
                    {c.username} 
                    <div className='dot'></div> 
                    <font style={{color: "#C4CCCF"}}>
                        {getDate(c.date)}
                        <div className='dot'></div>
                        {getTime(c.date)}
                    </font>
                </h3>
                <p>{c.message}</p>
            </div>
        );
    }

    let checkComments = (r) => {
        let revs = reviews.filter(r => r.title === movie.title);
            if (revs.length === 0)
                return <h3>Seems like noone left a comment yet...</h3>
            else
                return revs[0]?.comments.map(c => loadComments(c));
    }

    let commentField = () => {        
        if (props.user != null)
        {
            return (
                <>
                    <h3 style={{display: "block"}}>Leave a comment</h3>
                    <textarea placeholder='Review...' className='comment-body'/>
                    <div className='sign-button'>Send</div>
                </>
            )
        }
        else
            return <h3 style={{display: "block"}}>Please, log in to leave reviews.</h3>
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
                        <img src='./images/calendar.png' alt="calendar-icon"/> <span> {getDate(movie.releaseDate)}</span>
                    </div>
                    <div style={{display: "inline-block"}}>
                        <h3>Duration:</h3>
                        <img src='./images/clock.png' alt="clock-icon"/> <span> {movie.runningTime} minutes</span>
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
        <div className='reviews-section'>
            <h2>Share your emotions with others</h2>
            {checkComments(reviews)}
            {commentField()}
        </div>
        </>
    );
}

export default MoviePage;