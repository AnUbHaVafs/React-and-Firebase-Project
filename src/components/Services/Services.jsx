import React from 'react'
import './services.css';
import document from './document.png';
const Services = () => {
    return (
        <div className='Services'>
            <div className='subsHeadingBox'>
                <div className='headingSubs'>
                    <p className='subsHOne'> Get Started Now</p>
                    <p className='subsHBTwo'>Our Pricing Plans</p>
                    <p className='subsHBThree'>Get started now with us to earn every
                        day and forever in your business.
                        We accept Investment from all over
                        the world.</p>
                </div>
            </div>
            <div className='serviceParent'>
                <div className='serviceOne'>
                    <div className='serviceCard'>
                        <img className='documentImage' src={document} alt='' />
                        <p className='serHeading'>Lorem, ipsum dolor.</p>
                        <p className='serDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, illo?</p>
                    </div>
                    <div className='serviceCard'>
                        <img className='documentImage' src={document} alt='' />
                        <p className='serHeading'>Lorem, ipsum dolor.</p>
                        <p className='serDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, illo?</p>
                    </div>
                    <div className='serviceCard'>
                        <img className='documentImage' src={document} alt='' />
                        <p className='serHeading'>Lorem, ipsum dolor.</p>
                        <p className='serDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, illo?</p>
                    </div>
                </div>
                <div className='serviceOne'>
                    <div className='serviceCard'>
                        <img className='documentImage' src={document} alt='' />
                        <p className='serHeading'>Lorem, ipsum dolor.</p>
                        <p className='serDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, illo?</p>
                    </div>
                    <div className='serviceCard'>
                        <img className='documentImage' src={document} alt='' />
                        <p className='serHeading'>Lorem, ipsum dolor.</p>
                        <p className='serDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, illo?</p>
                    </div>
                    <div className='serviceCard'>
                        <img className='documentImage' src={document} alt='' />
                        <p className='serHeading'>Lorem, ipsum dolor.</p>
                        <p className='serDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, illo?</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services