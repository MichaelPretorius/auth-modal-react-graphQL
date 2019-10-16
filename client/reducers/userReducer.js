import { initialState } from './initialState'

export const userReducer = (state = initialState.user, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        loggedIn: true
      }
    default:
      return state;
  }
}