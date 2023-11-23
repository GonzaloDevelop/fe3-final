import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme === 'dark' ? 'dark' : ''}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider