import { modalReducer } from "./modalReducer";
// Add reducers here as necessary
export const mainReducer = ({ modal }, action) => ({
  modal: modalReducer(modal, action)
});