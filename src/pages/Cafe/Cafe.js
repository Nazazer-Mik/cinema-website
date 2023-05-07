import React from 'react';
import './Cafe.css'
import { food } from './food';

function Cafe () {

    let scrollToAnchor = (id) => {
        let hd = document.getElementById('empty-space').getBoundingClientRect().height;
        let obj = document.getElementById(id).getBoundingClientRect().y;
        
        window.scrollTo(0, obj - hd + window.pageYOffset);
    }

    let getFoodBlock = (obj) => {
        return (
            <div style={{width: 'fit-content', display: 'inline-block'}}>
                <div className='food-block'>
                    <div className='food-img' style={{backgroundImage: `url(${obj.imgPath})`}}/>
                    <hr style={{width: '100%', marginTop: '30px'}}/>
                    <h3>{obj.title} <font className='price'> {obj.price}£ </font></h3>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className='left-panel' id='left'>
                <ul>
                    <li onClick={() => scrollToAnchor('popcorn')}>Popcorn</li>
                    <li onClick={() => scrollToAnchor('ff')}>Fast food</li>
                    <li onClick={() => scrollToAnchor('dessert')}>Dessert</li>
                    <li onClick={() => scrollToAnchor('drinks')}>Drinks</li>
                </ul>
            </div>
            <div className='shop-container'>
                <center><h1>It's time to eat something...</h1></center>
                <div className='food-container'>
                    <div className='title-container' id='popcorn'>
                        <h2>Popcorn classics</h2>
                        <div className='line-itself'/>
                    </div>
                    {food.popcorn.map((f) => getFoodBlock(f))}
                    <div className='title-container' id='ff'>
                        <h2>Fresh fast food </h2>
                        <div className='line-itself'/>
                    </div>
                    {food.fastFood.map((f) => getFoodBlock(f))}
                    <div className='title-container' id='dessert'>
                        <h2>Dessert and treats</h2>
                        <div className='line-itself'/>
                    </div>
                    {food.dessert.map((f) => getFoodBlock(f))}
                    <div className='title-container' id='drinks'>
                        <h2>Drinks and cocktails</h2>
                        <div className='line-itself'/>
                    </div>
                    {food.drinks.map((f) => getFoodBlock(f))}
                </div>
            </div>
        </>
    );
}

document.addEventListener("scroll", event => {
    let fxd = document.getElementById('left');
    let bt = document.getElementById('bottom');
    if (fxd == null) return;
    
    if (window.scrollY + window.innerHeight >= bt.getBoundingClientRect().y + window.pageYOffset)
        fxd.style.transform = 'translateX(-20vw)';
    else
        fxd.style.transform = 'translateX(0)';

})

export default Cafe;