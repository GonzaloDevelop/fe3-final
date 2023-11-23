import React from 'react'
import APIContextProvider from './APIContextProvider'
import FavsLogicContextProvider from './FavsLogicContextProvider'
import ThemeContextProvider from './ThemeContextProvider'

const GlobalContextProvider = ({ children }) => {
  return (
    <APIContextProvider>
      <FavsLogicContextProvider>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </FavsLogicContextProvider>
    </APIContextProvider>
  )
}

export default GlobalContextProvider