import React from 'react';
import './Footer.css'

function Footer () {
    return (
        <div className='footer-box'>
            <div className='flex-container'>
                <div className='pages-list'>
                    <h3>Sitemap</h3>
                    <p>What's on screens now</p>
                    <p>Cafe-bar</p>
                    <p>Surveys and upcoming movies</p>
                    <p>Support</p>
                    <p>Create account</p>
                    <p>Log in the account</p>
                    <p>Review history of views</p>
                    <p>Refund Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Allergen information</p>
                    <p>Disability access</p>
                </div>
                <div className='news-events-list'>
                    <h3>News & events</h3>
                    <p>Latest from Universal Pictures</p>
                    <p>New 4Dx screens soon</p>
                    <p>Easter discounts</p>
                    <p>12th of Wednesday Incident</p>
                </div>
                <div className='about-list'>
                    <h3>About WhyNot.cinema</h3>
                    <p>Who are we</p>
                    <p>Careers</p>
                    <p>Employee page</p>
                    <p>Associations</p>
                </div>
                <div className='social-media-list'>
                    <h3>Follow us on social media</h3>
                    <p><img src = {'./images/facebook.png'} alt={'logo'}/> <div>Facebook</div> </p>
                    <p><img src = {'./images/twitter.png'} alt={'logo'}/> <div>Twitter</div> </p>
                    <p><img src = {'./images/instagram.png'} alt={'logo'}/> <div>Instagram</div> </p>
                    <p><img src = {'./images/youtube.png'} alt={'logo'}/> <div>Youtube</div> </p>
                    <p><img src = {'./images/tik-tok.png'} alt={'logo'}/> <div>Tik-tok</div> </p>
                    <p><img src = {'./images/reddit.png'} alt={'logo'}/> <div>Reddit</div> </p>
                </div>
            </div>
            <p className='copyright-text'>For assistance, please, call main office: 07771 598 227. We are located in London Kensington, W1f 0BT, 5 Walker's Street</p>
            <p className='copyright-text'>All rights reserved WhyNot Cinemas 2023 &#169;</p>
        </div>
    );
}

export default Footer;