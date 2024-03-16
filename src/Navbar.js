import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'


const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext()
  return <nav className="nav">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className='nav-logo' alt="stripe" />
        <button className='btn toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className='nav-links'>
        <li>
          <button className='link-btn'></button>
        </li>
      </ul>
    </div>
  </nav>
}

export default Navbar
