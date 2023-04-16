import React, { Component } from 'react';
import {changeMovies} from '../../pages/Home/Home.js'

class CitiesSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {city: 'Crawley'};
        
        this.ChangeCity = this.ChangeCity.bind(this);
        this.GetCity = this.GetCity.bind(this);

        //changeMovies(this.state.city);
    }

    ChangeCity (e) {
        this.setState({city: e.target.value})
        changeMovies(e.target.value);
    }

    GetCity () {
        return this.state.city;
    }

    render() {
        return (
            <select value={this.state.city} onChange={this.ChangeCity} className = 'location'>
                <option value={'Crawley'}>Crawley</option>
                <option value={'Tunbridge Wells'}>Tunbridge Wells</option>
                <option value={'East Croydon'}>East Croydon</option>
                <option value={'Brighton'}>Brighton</option>
                <option value={'Horley'}>Horley</option>
            </select>
        );
    }
}



export default CitiesSelector;