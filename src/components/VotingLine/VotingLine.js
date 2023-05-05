import React, { useEffect, useRef, useState } from 'react';
import './VotingLine.css'

function VotingLine (props) {
    let [voteNumber, setVoteNumber] = useState({f: props.votes.first, s:  props.votes.second, t: props.votes.third});
    let all = voteNumber.f +  voteNumber.s + voteNumber.t;
    let f = (voteNumber.f/all)*100;
    let s = (voteNumber.s/all)*100;
    let t = (voteNumber.t/all)*100;
    let user = sessionStorage.getItem('authorized');

    let voteBlocksCont = (
        <>
            <div className='three-flex-container' id='three'>
                <div className='three-blocks-container'>
                    <div className='vote-section first-bl' style={{width: `${f}%`}} onClick={() => {if(user != null) setVoteNumber({f: voteNumber.f+1, s:  voteNumber.s, t: voteNumber.t})}}>{voteNumber.f} votes ({Math.round(f)}%)</div>
                    <div className='vote-section second-bl' style={{width: `${s}%`}} onClick={() => {if(user != null)setVoteNumber({f: voteNumber.f, s:  voteNumber.s+1, t: voteNumber.t})}}>{voteNumber.s} votes ({Math.round(s)}%)</div>
                    <div className='vote-section third-bl' style={{width: `${t}%`}} onClick={() => {if(user != null)setVoteNumber({f: voteNumber.f, s:  voteNumber.s, t: voteNumber.t+1})}}>{voteNumber.t} votes ({Math.round(t)}%)</div>
                </div>
            </div>
            <div className='vote-sign'>
                <img src='./images/back.png'/> 
                    <h2> {(user == null) ? 'Please, sign in to vote' : 'Vote'} </h2>
                <img src='./images/back.png'/> 
            </div>
        </>
    );

    return (voteBlocksCont);
}

export default VotingLine;

