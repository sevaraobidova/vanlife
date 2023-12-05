import React from 'react'
import './Header.scss'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Vans from '../pages/Vans'
import logo from '../../assets/img/logo.png'

export default function Header() {
  return (
    <div>
      <header>
        <div className="container navbar">
          <Link className='nav-logo' to='/'> <img src={logo} alt="" /></Link>
          <nav>
            <Link to='/about'>About</Link>
            <Link to='/vans'>Vans</Link>
            <Link to='/shop'>Shop</Link>
          </nav>
        </div>
      </header>
    </div>
  )
}
