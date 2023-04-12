import React from 'react';
import { Link } from 'react-router-dom';
import'./Header.css'

const Header = () => {
    return (
        <nav className='container header'>
            <h3 className='header-title'>Dream Job Hunter</h3>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/Applied">Applied Jobs</Link>
                <Link to="/Blog">Blog</Link>
                
            </div>
            <button className='apply'>Start Applying</button>
        </nav>
    );
};

export default Header;