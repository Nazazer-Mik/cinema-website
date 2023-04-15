import React from 'react';
import './Header.css'
import HeaderSign from '../HeaderSign/HeaderSign.js'
import MiddleHeader from '../MiddleHeader/MiddleHeader.js'

function Header () {

        return (
            <div className="header">
                <HeaderSign text={"What's on"} path = {"./images/icon-cinema.png"}/>
                <HeaderSign text={"On-site Cafe"} path = {"./images/icon-popcorn.png"}/>
                <MiddleHeader/>
                <HeaderSign text={"Upcoming"} path = {"./images/icon-clapperboard.png"}/>
                <HeaderSign text={"Support"} path = {"./images/icon-phone.png"}/>
            </div>
        );
}

export default Header;