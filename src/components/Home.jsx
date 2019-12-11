import React from 'react'
import mountains from '../images/mountains.jpg'
import './Home.css'

const Home = () => {
    return(
        <div className='landingPage'>
            <img className='mountains' src={mountains} alt=""/>
        </div>
    );
}

export default Home;