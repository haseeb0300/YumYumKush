
import isEmpty from '../../validation/is-empty';

import {   ADD_BOOK_CART,REMOVE_BOOK_CART } from '../actions/type';

 
const initialState = {
   cart:[]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK_CART:
      return {
        ...state,
        cart: [  ...state.cart , action.payload]
      }
      case REMOVE_BOOK_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.Book_ID !== action.payload.Book_ID),
      }
    default:
      return state;
  }
}

