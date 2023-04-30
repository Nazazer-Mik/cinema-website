import React from 'react';
import "./sign.css"
import SignField from '../../components/SignField/SignField';

function SignIn (props) {

    let submitFunc = event => {
        let form = document.getElementById("sign-in");
        const singData = {
            username: form['text'].value,
            password: form['password'].value
        }
        
        let dataReceived = window.localStorage.getItem(singData.username);
        
        if (dataReceived === null || JSON.parse(dataReceived).password !== singData.password)
        {
            alert("Error! Incorrect credentials!");
            event.preventDefault();
        }

        window.sessionStorage.setItem("authorized", singData.username);
    }

    return (
        <div className='signSection'>
        <h1>Create your <span> WhyNot</span> movie account here:</h1>
        <form action="/" id="sign-in" onSubmit={submitFunc}>
            <SignField name="Username:" type="text"/>
            <SignField name="Password:" type="password"/>
            <input type='submit' value="Log in"/>
        </form>
    </div>
    );
}

export default SignIn;