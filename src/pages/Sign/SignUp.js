import React from 'react';
import './sign.css'
import SignField from '../../components/SignField/SignField';

function SignUp () {
    
    let submitFunc = event => {
        let form = document.getElementById("sign-up");
        const regData = {
            username: form['text'].value,
            email: form['email'].value,
            password: form['password'].value,
            bonuses: 10
        }

        if (window.localStorage.getItem(regData.username) !== null)
        {
            alert("Username is already registered!");
            event.preventDefault();
        }
    
        window.localStorage.setItem(regData.username, JSON.stringify(regData));
    }

    return (
        <div className='signSection'>
            <h1>Create your <span> WhyNot</span> movie account here:</h1>
            <form action="/signin" id="sign-up" onSubmit={submitFunc}>
                <SignField name="Email:" example="example000@domain.com" type="email"/>
                <SignField name="Username:" example="JohnWault" type="text"/>
                <SignField name="Password:" example="Symbols01" type="password"/>
                <input type='submit' value="Create"/>
            </form>
        </div>
    );
}

export default SignUp;