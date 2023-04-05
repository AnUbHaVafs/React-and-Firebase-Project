import React from 'react'
import './body.css';
import rightArrow from './right-arrow.png';
import leftArrow from './left-arrow.png';
const Body = () => {
    return (
        <div>
            <div className='bodyOne'>
                <div className='subbodyOne'>
                    <div className='arrow'>
                        <img className='arrowSize' src={leftArrow} alt='' />
                    </div>
                    <div className='bodyOneContent'>
                        <p className='HeadingOne'>Lorem ipsum dolor sit amet.</p>
                        <div className='content leftPadding'>
                            <p className='HeadingMain'>We Are the leaders of financial investment and market</p>
                            <p className='HeadingTwo'>The market is incredibly competitve We Are the leaders of financial investment and market.</p>
                        </div>
                        <div className='listButtons leftPadding'>
                            <button className='btnOneZero'>Get Started</button>
                            <button className='btnOne'>Book Wash</button>
                        </div>
                    </div>
                    <div className='arrow'>
                        <img className='arrowSize' src={rightArrow} alt='' />
                    </div>
                </div>
                <div className='slider'>
                    <div className='slidingDots'></div>
                    <div className='staticBox'>
                        <p className='staticText'>Get A Free Quote</p>
                    </div>
                </div>
            </div>
            {/* <div className='bodyTwo'></div> */}
            {/* <div className='bodyThree'></div> */}
        </div>
    )
}

export default Body