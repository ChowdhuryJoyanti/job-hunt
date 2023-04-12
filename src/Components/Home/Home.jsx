import React from 'react';
import'./Home.css'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../../../assets/All Images/P3OLGJ1 copy 1.png'

const Home = () => {
    return (
        <div className='container-fluid banner-container' >
            <div className='banner-details'>
                <h1 className='banner-title fw-bold'>One Step <br></br> Closer To Your<br></br><span className='dream'> Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it.
                    Manage all your job application from start to finish.</p>
                    <button className='get-start'>Get Started</button>
            </div>
            <div>
                <img className='banner-img' src={image} alt="" />
            </div>
           <div>
          
             </div>
        </div>
        
    );
};

export default Home;