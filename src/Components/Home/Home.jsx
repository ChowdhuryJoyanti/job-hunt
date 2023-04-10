import React from 'react';
import'./Home.css'

const Home = () => {
    return (
        <div className='banner-container' >
            <div className='banner-details'>
                <h1>One Step <br></br> Closer To Your Dream Job</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it.
                    Manage all your job application from start to finish.</p>

            </div>
            <div>
                <img className='banner-img' src="/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
            </div>
           <div>
             <button className='get-start'>Get Started</button>
             </div>
        </div>
        
    );
};

export default Home;