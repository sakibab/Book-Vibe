import React from 'react';
import { Outlet } from 'react-router';
import Footer from './../../components/Footer/Footer';
import Nav from '../../components/Header/Nav';




const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;