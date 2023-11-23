import React, { createContext, useReducer, useEffect } from 'react'
import { themeReducer } from '../reducers/themeReducer'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' })

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      dispatch({ type: 'SET_THEME', payload: localTheme })
    }
  }, [])

  useEffect(() => {
    document.body.className = state.theme
  }, [state.theme])

  const toggleTheme = () => {
    dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' })
  }

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider