import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Cards from '../Cards/Cards';
import Features from '../Features/Features';
import JobDetails from '../JobDetails/JobDetails';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
             {/* <Home></Home> */}
            {/* <Cards></Cards> */}

            {/* <Features></Features>  */}
    
        </div>
    );
};

export default Main;