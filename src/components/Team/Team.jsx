import React from 'react'
import './Team.css';
import person from './mem.png';
const Team = () => {
    return (
        <div className='Team'>
            <div className='teamHead'>
                <div className='headingSubs'>
                    <p className='subsHOne'> Our Experts</p>
                    <p className='subsHBTwo'>Meet Our Team</p>
                    <p className='teamText'>We love what we do and we do it with passion. We value the reformation of the message, and the smart incentives.</p>
                </div>
            </div>
            <div className='teamPhotos'>
                <div className='photo'>
                    <img className='personImageOg' src={person} />
                    <p className='teamName'>Alexander Parker</p>
                    <p className='teamMemberDesg'>Software Engineer</p>
                </div>
                <div className='photo'>
                    <img className='personImageOg' src={person} />
                    <p className='teamName'>Alexander Parker</p>
                    <p className='teamMemberDesg'>Software Engineer</p>
                </div>
                <div className='photo'>
                    <img className='personImageOg' src={person} />
                    <p className='teamName'>Alexander Parker</p>
                    <p className='teamMemberDesg'>Software Engineer</p>
                </div>
            </div>
        </div>
    )
}

export default Team