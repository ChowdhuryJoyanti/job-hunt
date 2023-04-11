import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Cards from '../Cards/Cards';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Cards></Cards>
        </div>
    );
};

export default Main;