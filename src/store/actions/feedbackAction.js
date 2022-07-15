import axios from 'axios';
import { GET_ERRORS} from '../actions/type'

export const createFeedback = feedbackData => dispatch => {
    return axios
      .post('api/feedback', feedbackData)
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

  export const getAboutUs = () => dispatch => {
    return axios
        .get('/api/aboutus')
        .then((res) => {
            console.log(res)
  
            return Promise.resolve(res.data)
        }).catch((err) => {
            console.log(err)
            return Promise.reject(err)
        })
  
  
  }