import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
    const links = <>
        <NavLink to="/"><li className='m-2 font-bold'>Home</li></NavLink>
        <NavLink to='/about'><li className='m-2 font-bold'>About</li></NavLink>
        <NavLink to="/blog"><li className='m-2 font-bold'>Blog</li></NavLink>
        <NavLink to="cntact"><li className='m-2 font-bold'>Contact</li></NavLink>
    </>
    return (
        <div className=' bg-base-100 shadow-sm'>
        <div className="navbar w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="font-bold text-xl">BookVibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
</div>
    );
};

export default Nav;