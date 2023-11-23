import { createContext, useReducer, useEffect } from 'react'

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
  switch(action.type) {
    case 'SET_THEME':
      return {...state, theme: action.payload}
    default:
      return state
  }
}

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' })

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      dispatch({ type: 'SET_THEME', payload: localTheme })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', state.theme);
    document.body.className = state.theme;
  }, [state.theme])

  const toggleTheme = () => {
    dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' });
  }

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider