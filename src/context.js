import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    return <AppContext.Provider>{children}</AppContext.Provider>
}