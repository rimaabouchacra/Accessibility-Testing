import '../index.css'
import './index.css'
import React from 'react';
import logo from '../../images/logo.png'

const Navbar = () => {

  return (
    <nav className='navbar'>
      <div>
        <img className='nav-logo' src={logo} alt='logo' />
      </div>
      <div className='links'>
        <a href='/'>Home</a>
        <a href='saved'>ImageTest</a>
        <a href='allposts'>HeadingsTest</a>
        <a href='marketplaceposts'>LinkButtonTest</a>
      </div>
      <div className='links-register'>
        <a href='login'>Login</a>
        <button className='all-btn'><a href="signup">Sign up free</a></button>
      </div>
    </nav>
  );
};

export default Navbar;