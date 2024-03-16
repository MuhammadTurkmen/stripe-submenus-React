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
          <button className='link-btn'>
            products
          </button>
           <button className='link-btn'>
            developers
          </button>
           <button className='link-btn'>
            company
          </button>
        </li>
      </ul>
      <button className='btn signin-btn'></button>
    </div>
  </nav>
}

export default Navbar
