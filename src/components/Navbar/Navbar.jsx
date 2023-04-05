import React from 'react'
import './navbar.css';
import nike from './whirlpool.png';
const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='Logo'>
                <img src={nike} alt='' className='nikeImage' />
            </div>
            <div className='Lists'>
                <a className='listItem'>Home</a>
                <p className='listItem'>Services</p>
                <p className='listItem'>Blogs</p>
                <p className='listItem'>Contact</p>
                <p className='listItem'>Element</p>
                <p className='listItem'>Shop</p>
            </div>
            {/* <div ></div> */}
            <div className='mainButton'>Book Wash</div>
        </div>
    )
}

export default Navbar