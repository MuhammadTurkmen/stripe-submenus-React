import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubmenuOpen, location} = useGlobalContext()
  useEffect(() => {

  }, [location])
  return <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}>submenu</aside>
}

export default Submenu
