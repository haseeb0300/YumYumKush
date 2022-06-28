
import isEmpty from '../../validation/is-empty';

import {   ADD_BOOK_CART,EMPTY_BOOK_CART,REMOVE_BOOK_CART,UPDATE_QUANTITY } from '../actions/type';

 
const initialState = {
   cart:[]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK_CART:
      return {
        ...state,
        cart: [  ...state.cart , {...action.payload ,quantity:1}]
      }
      case REMOVE_BOOK_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.Book_ID !== action.payload.Book_ID),
      }
      case UPDATE_QUANTITY:
       let id = action.payload.InventryId || action.payload.DealId
        if(action.payload.quantity <= 0){
          return {
            ...state,
            cart: state.cart.filter(item => (item.InventryId || item.DealId) !==  id)
          }
        }
 
        let updatedList = state.cart.map((item,index) =>  (item.InventryId || item.DealId) ===  id ? 
        action.payload 
          :item )

        return {
          ...state,
          cart: updatedList
        } 
      case EMPTY_BOOK_CART:
        return initialState;
    default:
      return state;
  }
} 

export function getCartQuanitityAndAmount(cart) {
  console.log(cart);
      return cart?.cart.reduce(
        ({ total}, {  price ,dealPrice  ,quantity  }) => ({
           total:total+  (price || dealPrice) *quantity,
 
        }),
        {
            total: 0,
        },
    );
}