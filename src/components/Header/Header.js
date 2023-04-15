import React from 'react';
import './Header.css'
import { routes } from './routes.js'
import HeaderSign from '../HeaderSign/HeaderSign.js'
import MiddleHeader from '../MiddleHeader/MiddleHeader.js'
import VerticalLine from '../VerticalLine/VerticalLine.js'
import SignButton  from '../SignButton/SignButton.js'
import { Routes, Route } from 'react-router-dom'

const getRoutes = ({path, element}) => (
    <Route path = {path} element = {element} key={path}/>
);

function Header () {
        return (
            <>
            <div className="header">
                <HeaderSign text={"What's on"} imgPath = {"./images/icon-cinema.png"} path = {'/'}/>
                <HeaderSign text={"On-site Cafe"} imgPath = {"./images/icon-popcorn.png"} path = {'/cafe'}/>
                <MiddleHeader/>
                <HeaderSign text={"Upcoming"} imgPath = {"./images/icon-clapperboard.png"} path = {'/upcoming'}/>
                <HeaderSign text={"Support"} imgPath = {"./images/icon-phone.png"} path = {'/support'}/>
                <VerticalLine/>
                <div>
                    <SignButton text={'Sign in'} path = {'/signin'}/>
                    <SignButton text={'Sign up'} path = {'/signup'}/>
                </div>
            </div>
            <div className='empty-space'></div>
            <Routes>
                {routes.map(getRoutes)}
            </Routes>
            </>
        );
}

export default Header;