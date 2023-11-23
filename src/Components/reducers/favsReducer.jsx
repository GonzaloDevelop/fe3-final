export const favsLogicReducer = (state, action) => {
    switch (action.type) {
      case 'LOAD_FAVORITES':
        return [...action.payload]
      case 'CLEAR_FAVORITES':
        localStorage.removeItem('favorites')
        return []
      default:
        return state
    }
  }