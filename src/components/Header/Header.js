import React, { useState } from 'react';
import './Header.css'
import Home from '../../pages/Home/Home.js'
import { routes } from './routes.js'
import {movies} from '../../pages/Home/list.js'
import HeaderSign from '../HeaderSign/HeaderSign.js'
import MiddleHeader from '../MiddleHeader/MiddleHeader.js'
import VerticalLine from '../VerticalLine/VerticalLine.js'
import SignButton  from '../SignButton/SignButton.js'
import MoviePage from '../MoviePage/MoviePage.js'
import { Routes, Route } from 'react-router-dom'
import SignIn from '../../pages/Sign/SignIn';

function Header () {
    let PassCityAncestor = (city) =>
    {
        setLocalcity(city);
    }

    let [localCity, setLocalcity] = useState('Crawley');
    let [storage, setItem] = useState(window.sessionStorage);
    
    const getRoutes = ({path, element}) => 
    {
        if(path === "/")
            return <Route path={path} element={<Home city={localCity} />} key={path} />
        else if (path === "/signin")
            return <Route path={path} element={<SignIn storage = {storage}/>} key={path} />
        else
            return <Route path={path} element={element} key={path} />
    }
    

    const addMovieRoutes = (r) =>
    {
        let routeList = r;
        movies.forEach(m => routeList.push({path: '/' + m.title.toLowerCase().replaceAll(' ', '-'), element: <MoviePage movie = {m}/>}))
        return routeList;
    }

    let exitAccount = () => {
        storage.clear();
        alert('gnom');
    }

    let account = () => {
        let user = storage.getItem("authorized");
        if (user == null)
            return (
            <>
                <SignButton text={'Sign in'} path = {'/signin'}/>
                <SignButton text={'Sign up'} path = {'/signup'}/>
            </>);
        else
        {
            let bonuses = JSON.parse(window.localStorage.getItem(user)).bonuses;
            return (
                <>
                    <img src = './images/user.png' className='user-icon'/>
                    <h3>{user}</h3>
                    <img src = './images/star.png' className='star'/>
                    <h3>{bonuses}</h3>
                    <div className='sign-button' onClick={exitAccount}>Sign out</div>
                </>);
        }

    }

    return (
        <>
        <div className="header">
            <HeaderSign text={"What's on"} imgPath = {"./images/icon-cinema.png"} path = {'/'}/>
            <HeaderSign text={"On-site Cafe"} imgPath = {"./images/icon-popcorn.png"} path = {'/cafe'}/>
            <MiddleHeader PassCity = {PassCityAncestor}/>
            <HeaderSign text={"Upcoming"} imgPath = {"./images/icon-clapperboard.png"} path = {'/upcoming'}/>
            <HeaderSign text={"Support"} imgPath = {"./images/icon-phone.png"} path = {'/support'}/>
            <VerticalLine/>
            <div className='profile-view'>
                {account()}
            </div>
        </div>
        <div className='empty-space' id = 'empty-space'></div>
        <Routes>
            {addMovieRoutes(routes).map(getRoutes)}
        </Routes>
        </>
    );
}

export default Header;