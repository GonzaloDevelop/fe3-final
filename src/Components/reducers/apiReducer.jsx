export const apiReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return { ...state, users: action.payload, isLoading: false, error: null }
      case 'FETCH_ERROR':
        return { ...state, users: [], isLoading: false, error: action.payload }
      case 'LOADING':
        return { ...state, isLoading: true }
      default:
        return state
    }
  }