import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from './logo-red.png'

let toggleNavBar;

const Header = ({reloadDashboard}) => {
  toggleNavBar = (e) => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    e.target.classList.toggle('active');
  }

  return (
    <header>
      <NavLink to='/' className='title' onClick={reloadDashboard}>
        <img className='logo' src={logo} />
        <h1>Stanky Pomodoros</h1>
      </NavLink>
      <button onClick={toggleNavBar}>🍔</button>
    </header>
  )
}

export {toggleNavBar};
export default Header;
