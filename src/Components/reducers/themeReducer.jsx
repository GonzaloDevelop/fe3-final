export const themeReducer = (state, action) => {
    switch (action.type) {
      case 'SET_THEME':
        localStorage.setItem('theme', action.payload)
        return { ...state, theme: action.payload }
      default:
        return state
    }
  }