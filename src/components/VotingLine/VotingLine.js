import React from 'react';
import './VotingLine.css'

function VotingLine (props) {
    let voteBlocksCont = (
        <div className='three-flex-container' id='three'>
            <div className='three-blocks-container'>
                
            </div>
        </div>
    );

    return (voteBlocksCont);
}

document.addEventListener('onload', () => {
    const elem = document.getElementsByClassName('movie-block')[0];
    const movPadding = elem.getBoundingClientRect().left;
    //container.current.style.padding = `${movPadding}`;
    console.log(movPadding + 'gfdgd');
});

export default VotingLine;

