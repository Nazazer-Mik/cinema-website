import React from 'react';
import './Header.css'
import HeaderSign from '../HeaderSign/HeaderSign.js'
import MiddleHeader from '../MiddleHeader/MiddleHeader.js'
import VerticalLine from '../VerticalLine/VerticalLine.js'
import SignButton  from '../SignButton/SignButton.js'

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
            </>
        );
}

export default Header;