import React, { useState } from 'react';

function FAQStatement (props) {
    let question = props.question;
    let [visible, setVisibility] = useState(false);

    let problem = (
        <>
            <div className='question-container' onClick={() => setVisibility(!visible)}>
                <img src='./images/down.png' alt='arrow-icon' className={visible ? 'clicked' : ''}/>
                <h3>{question.problem}</h3>
            </div>
        </>
    );

    let description = (
        <>
            <p>
                {question.solution}
            </p>
        </>
    );

    return (
        <>
            {problem}
            {visible ? description : ''}
        </>
    );
}

export default FAQStatement;