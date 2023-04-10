import React from 'react';
import { Link } from 'react-router-dom';
import'./Header.css'

const Header = () => {
    return (
        <nav className='header-container'>
            <h3>Dream Job Hunter</h3>
            <div className='links'>
                <Link to="/statics">Statistics</Link>
                <Link to="/AppliedJobs">Applied Jobs</Link>
                <Link to="/Blog">Blog</Link>
                
            </div>
            <button className='apply'>Start Applying</button>
        </nav>
    );
};

export default Header;