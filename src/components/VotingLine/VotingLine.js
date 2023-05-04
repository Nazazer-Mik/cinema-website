import React, { useEffect, useRef } from 'react';
import './VotingLine.css'

function VotingLine (props) {
    let all = props.votes.first + props.votes.second + props.votes.third;

    let voteBlocksCont = (
        <div className='three-flex-container' id='three'>
            <div className='three-blocks-container'>
                <div className='vote-section first' style={{width: `${(props.votes.first/all)*100}%`}}></div>
                <div className='vote-section second' style={{width: `${(props.votes.second/all)*100}%`}}></div>
                <div className='vote-section third' style={{width: `${(props.votes.third/all)*100}%`}}></div>
            </div>
        </div>
    );

    return (voteBlocksCont);
}

export default VotingLine;

