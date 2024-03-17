import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubmenuOpen} = useGlobalContext()
  return <h2>submenu component</h2>
}

export default Submenu
