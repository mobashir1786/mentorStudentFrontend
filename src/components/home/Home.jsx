import React from 'react';
// import { useState } from 'react';
import './home.css';
import nav from "../../assets/nav.png";
import Recording from '../record/Recording';

const Home = () => {


    return (
        <div className='home'>
            <div className="homenav">
                <img src={nav} alt="nav" />
                <div className="webcontent">
                    <Recording />
                </div>
            </div>
        </div>
    )
}

export default Home