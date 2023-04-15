import React from 'react';
import './Home.css'
import MovieBlock from '../../components/MovieBlock/MovieBlock.js'

function Home () {
    return (
        <div className='main-block'>
            <MovieBlock imgPath={'./images/movies/puss-in-boots.jpg'} title={'Puss in Boots'} description={'When Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish.'}/>
        </div>
    );
}

export default Home;