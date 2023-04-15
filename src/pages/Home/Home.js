import React, { Component } from 'react';
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Main from '../../components/Main/Main.js'

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        );
    }
}

export default Home;