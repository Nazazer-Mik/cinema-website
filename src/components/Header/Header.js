import React from 'react';
import './Header.css'
import HeaderSign from "../../components/HeaderSign/HeaderSign.js"

function Header () {

        return (
            <div className="header">
                <HeaderSign text={"What's on"}/>
                <HeaderSign text={"On-site Cafe"}/>
                <HeaderSign text={"Upcoming"}/>
                <HeaderSign text={"Support"}/>
            </div>
        );
}

export default Header;