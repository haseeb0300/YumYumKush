
import { ADD_BOOK_CART, REMOVE_BOOK_CART } from '../actions/type'

export const addToCart = data => dispatch => {

    dispatch({
        type: ADD_BOOK_CART,
        payload: data
    })
};


export const removeFromCart = data => dispatch => {

    dispatch({
        type: REMOVE_BOOK_CART,
        payload: data
    })
};
