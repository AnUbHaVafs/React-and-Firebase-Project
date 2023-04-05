import React from 'react'
import './Testimonial.css';
import person from './per.jpg';
import afo from './afo.png';
const Testimonial = () => {
    return (
        <div className='testimonialUI'>
            <div className='tmContentBx'>
                <img className='personImg' src={person} alt='' />
                <p className='tsContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam.</p>
                <div className='tmSmallBx'>
                    <img className='afo' src={afo} alt='' />
                    <p className='nameTs'>Ankit Kishore</p>
                    <p className='desg'>From NSUT, Delhi</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial