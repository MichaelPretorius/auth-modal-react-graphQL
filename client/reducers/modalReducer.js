import { initialState } from './initialState'

export const modalReducer = (state = initialState.modal, action) => {
  switch (action.type) {
    case 'SHOW_MODAL_SIGNUP':
      return {
        ...state,
        showModal: action.showModal,
        form: 'signup' 
      };
    case 'SHOW_MODAL_LOGIN':
      return {
        ...state,
        showModal: action.showModal,
        form: 'login'
      }
    case 'CLEAR_MODAL':
      return {
        ...state,
        showModal: action.showModal,
        form: ''
      } 
    default:
      return state;
  }
};