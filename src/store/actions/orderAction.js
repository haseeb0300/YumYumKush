import axios from 'axios';
import { GET_ERRORS} from '../actions/type'

 
  export const createOrder = orderData => dispatch => {
    return axios
      .post('api/order', orderData)
      .then(res => {
        return Promise.resolve(res.data)
      })
      .catch(err => {
  
        if (err.response.data != null && err.response.data.validation) {
          console.log(err.response.data.validation);
          err = err.response.data
        } else {
          err = { "msg": "Something went wrong" }
        }
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
        return Promise.reject(err)
      });
  };
  export const sendMail = mailData => dispatch => {
    return axios
      .post('send/mail', mailData)
      .then(res => {
        return Promise.resolve(res.data)
      })
      .catch(err => {
  
        if (err.response.data != null && err.response.data.validation) {
          console.log(err.response.data.validation);
          err = err.response.data
        } else {
          err = { "msg": "Something went wrong" }
        }
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
        return Promise.reject(err)
      });
  };
