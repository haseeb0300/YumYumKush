
import { ADD_BOOK_CART, EMPTY_BOOK_CART, REMOVE_BOOK_CART, UPDATE_QUANTITY } from '../actions/type'

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

export const emptyCart = () => dispatch => {
    dispatch({
        type: EMPTY_BOOK_CART
    })
};

export const updateQuantity = (data) =>dispatch=>{
    dispatch({
        type: UPDATE_QUANTITY,
        payload:data
    })
}