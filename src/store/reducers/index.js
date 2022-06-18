import { combineReducers } from 'redux';
 
 
import { reducer as formReducer } from 'redux-form'
import auth from './auth';
import cart from './cart'

 

export default combineReducers({
    auth:auth,
    form: formReducer,
    cart:cart

  
})
