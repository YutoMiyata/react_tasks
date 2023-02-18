import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <h1>カフェタスク早見表</h1>
      <ul>
        <li><Link to='/' className='nav-active'>HOME</Link></li>
        <li><Link to='create/' className='nav-active'>NEW</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
