import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ({toggleHighlighted}) => {

  return (
    <header>
<<<<<<< HEAD
      <h1><NavLink to='/' onClick={toggleHighlighted}>Stanky Pomodoros</NavLink></h1>
=======
      <h1><NavLink  to='/' onClick={toggleHighlighted} >Stanky Pomodoros</NavLink></h1>
>>>>>>> main
      <button>🍔</button>
    </header>
  )
}

export default Header;
