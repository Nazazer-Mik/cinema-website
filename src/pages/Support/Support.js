import React from 'react';
import './support.css'
import { faqData } from './faq';
import FAQStatement from '../../components/FAQStatement/FAQStatement.js'
import TitleWithLine from '../../components/TitleWithLine/TitleWithLine';

function Support () {
    

    return (
        <div className='sign-section support'>
            <h1>Help and Support</h1>
            <TitleWithLine message='FAQ'/>
            <div className='faq-container'>
                {faqData.map( (q) => <FAQStatement question={q}/>)}
            </div>

            <TitleWithLine message='Still have questions? - Chat us!'/>
            <div className='chat-container'>
                <div className='chat-window'>
                    <div className='messages-area'></div>
                    <div className='bottom-chat-section'>
                        <input type='text' placeholder='Type in your message here...'/>
                        <div className='send-button'>Send</div>
                    </div>
                </div>
            </div>

            <TitleWithLine message='Urgent help and specific enquiries'/>
            <h3 className='contact-us'>
                If you want to get in contact with us please email us
                at <a href='mailto:customer.services@whynotcinema.co.uk'>customer.services@whynotcinema.co.uk</a> or give us a call on <a href='tel:07771 598 227'>07771 598 227</a>.
                Our lines are open 7 days a week from 9AM to 10PM.
            </h3>
        </div>
    );
}

export default Support;