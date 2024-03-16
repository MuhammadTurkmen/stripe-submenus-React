import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext()

  return <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
    <div className="sidebar">
      <button className='close-btn' onClick={closeSidebar}></button>
    </div>
  </aside>
}

export default Sidebar
