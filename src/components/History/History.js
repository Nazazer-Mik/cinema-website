import React from 'react';
import './History.css'
import {movies, currentDate} from '../../pages/Home/list.js'
import { getDate } from '../Header/useful';

function getHistoryLine(movie)
{
    let mvDate = getDate(movie.date);
    return (
        <tr>
            <td>{movie.title}</td>
            <td>{movie.location}</td>
            <td>{mvDate}</td>
        </tr>
    )
}

function History () {
    const compareTimes = (a, b) => {
        if (a.date > b.date)
            return -1;
        else if (a.date < b.date)
            return 1;
        else
            return 0;
    };

    return (
        <div className='history-bg' id = 'history-canvas'>
            <div className='history-window'>
                <div className='history-top-panel'>
                    <div className='history-back-button' id = 'history-button-out' onClick={CloseModWindow}>
                        <img src = './images/back.png' alt = 'back icon'/>
                        Back
                    </div>
                    <h2>History</h2>
                </div>
                <table>
                    <tr>
                        <th>Movie title</th>
                        <th>Location</th>
                        <th>Date</th>
                    </tr>
                    {movies.sort(compareTimes).map(e => {
                        if (e.date < currentDate)
                            return getHistoryLine(e);
                    })}
                </table>
            </div>
        </div>
    );
}

let CloseModWindow = () => {
    document.getElementById('history-canvas')?.classList.remove('active');
    document.body.style.overflowY = "scroll";
}

export default History;