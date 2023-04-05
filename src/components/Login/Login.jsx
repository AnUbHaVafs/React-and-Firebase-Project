import React from 'react'
import './login.css';
import puzzle from './puzzle.png';
const Login = () => {
    return (
        <div className='loginContainer'>
            <div className='parentCard'>
                <div className='serviceConatiner'>
                    <div className='loginCards'>
                        <img className='puzzleImg' src={puzzle} alt='cardImage' />
                        <div>
                            <p className='cardTitle'>Creative Solutions</p>
                            <p className='smallFont'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime repellendus dignissimos nobis earum quisquam nam nemo ipsum totam quam reiciendis.</p>
                        </div>
                    </div>
                    <div className='loginCards'>
                        <img className='puzzleImg' src={puzzle} alt='cardImage' />
                        <div>
                            <p className='cardTitle'>Professional Team</p>
                            <p className='smallFont'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime repellendus dignissimos nobis earum quisquam nam nemo ipsum totam quam reiciendis.</p>
                        </div>
                    </div>
                </div>
                <div className='serviceConatiner'>
                    <div className='loginCards'>
                        <img className='puzzleImg' src={puzzle} alt='cardImage' />
                        <div>
                            <p className='cardTitle'>Diverse Approach</p>
                            <p className='smallFont'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime repellendus dignissimos nobis earum quisquam nam nemo ipsum totam quam reiciendis.</p>
                        </div>
                    </div>
                    <div className='loginCards'>
                        <img className='puzzleImg' src={puzzle} alt='cardImage' />
                        <div>
                            <p className='cardTitle'>Detailed Reported</p>
                            <p className='smallFont'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime repellendus dignissimos nobis earum quisquam nam nemo ipsum totam quam reiciendis.</p>
                        </div>
                    </div>
                </div>
            </div>
            <form className='formContainer'>
                <input className='inputType' type='text' placeholder='Name' />
                <input className='inputType' type='text' placeholder='Email' />
                <input className='inputTypeTwo' type='email' placeholder='Request' />
                <button className='loginSubmit'>Submit Request</button>
            </form>
        </div>
    )
}

export default Login