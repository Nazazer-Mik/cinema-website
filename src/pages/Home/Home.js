import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './Home.css'
import MovieBlock from '../../components/MovieBlock/MovieBlock.js'
import {movies} from './list.js'

export function changeMovies(newCity)
{
    // let container = document.getElementById('main');
    // //console.log(container.innerHTML);
    // container.innerHTML ;

    // let root2 = ReactDOM.createRoot(document.getElementById('main'));
    // root2.render(<Home city = {newCity} />);
}

function getMovies (currentCity)
{
    let moviesArray = [];

    movies.forEach(e => 
        {
            if (e.location === currentCity)
                moviesArray.push(<MovieBlock imgPath={e.imgPath} technologies={e.technologies} title={e.title} description={e.description}/>);
        });

    return moviesArray;
}

function Home (props) {
    console.log(props);
    let city = (props.city === undefined) ? 'Crawley' : props.city;

    // let [city, setCity] = useState('Crawley');

    // let moviesRender = ({imgPath, technologies, title, description, date, location}) => {
    //     if (location === city)
    //     <MovieBlock imgPath={imgPath} technologies={technologies} title={title} description={description}/>
    // };


    return (
        <div className='main-block' id = 'main'>
            {getMovies(city)}
        </div>
    );
}

export default Home;