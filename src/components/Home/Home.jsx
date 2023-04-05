import React from 'react'
import './home.css';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import Subscription from '../Subscription/Subscription';
import Login from '../Login/Login';
import Services from '../Services/Services';
import Whoweare from '../Whoweare/Whoweare';
import Testimonial from '../Testimonial/Testimonial';
import Team from '../Team/Team';
const Home = () => {
    return (
        <div className='homeMain'>
            <Navbar />
            <Body />
            <Login />
            <Services />
            <Subscription />
            <Whoweare />
            <Testimonial />
            <Team />
        </div>
    )
}

export default Home