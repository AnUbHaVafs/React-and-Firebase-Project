import React from 'react'
import './subscription.css';
import g from './gTwo.png';
const Subscription = () => {
    return (
        <div className='subIntro'>
            <div className='subsHeadingBox'>
                <div className='headingSubs'>
                    <p className='subsHOne'> Get Started Now</p>
                    <p className='subsHTwo'>Our Pricing Plans</p>
                    <p className='subsHThree'>Get started now with us to earn every
                        day and forever in your business.
                        We accept Investment from all over
                        the world.</p>
                </div>
            </div>
            <div className='subsModals' >
                <div className='subModalOne'>
                    <img className='globe' src={g} />
                    <h4 className='starterHFour'>Starter Plan</h4>
                    <p className='subsPrice'><span className='dollarSubs'>$</span>125</p>
                    <p className='subsDesOnePrice'>Full Business analyzing, next generation accounting, and training sessions.</p>
                    <button className='getStartedButton'>Get Started</button>
                </div>
                <div className='subModalTwo'>
                    <div className='pTen'>
                        <img className='globe' src={g} />
                        <h4 className='starterHFourW'>Basic Plan</h4>
                        <p className='subsPriceW'><span className='dollarSubsW'>$</span>125</p>
                        <p className='subsDesOnePriceW'>Full Business analyzing, next generation accounting, and training sessions.</p>
                        <button className='getStartedButtonG'><span >Get Started</span></button>
                    </div>
                </div>
                <div className='subModalOne'>
                    <img className='globe' src={g} />
                    <h4 className='starterHFour'>Advanced Plan</h4>
                    <p className='subsPrice'><span className='dollarSubs'>$</span>125</p>
                    <p className='subsDesOnePrice'>Full Business analyzing, next generation accounting, and training sessions.</p>
                    <button className='getStartedButton'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Subscription