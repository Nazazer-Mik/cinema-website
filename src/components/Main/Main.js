import React, { Component } from 'react';
import './Main.css'
import MovieBlock from '../../components/MovieBlock/MovieBlock.js'

class Main extends Component {
    render() {
        return (
            <div className='main-block'>
                <MovieBlock />
            </div>
        );
    }
}

export default Main;