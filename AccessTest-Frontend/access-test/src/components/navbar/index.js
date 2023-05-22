import '../index.css'
import './index.css'
import React from 'react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
const Navbar = ({ activePage }) => {

  return (
    <nav className='navbar'>
      <div>
        <img className='nav-logo' src={logo} alt='logo' />
      </div>
      <div className='links'>
        <Link className={activePage === 'home' ? 'active' : ''} to='/'>Home</Link>
        <Link className={activePage === 'imagetest' ? 'active' : ''} to='/imagetest'>ImageTest</Link>
        <Link className={activePage === 'headingtest' ? 'active' : ''} to='/headingtest'>HeadingsTest</Link>
        <Link className={activePage === 'linkbuttontest' ? 'active' : ''} to='/linkbuttontest'>LinkButtonTest</Link>
      </div>
      <div className='links-register'>
        <Link className={activePage === 'login' ? 'active' : ''} to='/login'>Login</Link>
        <button className='all-btn'><a href="signup">Sign up free</a></button>
      </div>
    </nav>
  );
};

export default Navbar;