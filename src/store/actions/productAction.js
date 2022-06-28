import axios from 'axios';
import { GET_ERRORS} from '../actions/type'

  export const createInventory = inventoryData => dispatch => {
    return axios
      .post('api/inventry', inventoryData)
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
  export const getInventory = () => dispatch => {
    return axios
        .get('/api/inventry')
        .then((res) => {
            console.log(res)

            return Promise.resolve(res.data)
        }).catch((err) => {
            console.log(err)
            return Promise.reject(err)
        })
  }

  export const geSingleInventory = (InventryId) => dispatch => {
    return axios
        .get('/api/single/inventry?InventryId='+ InventryId)
        .then((res) => {
            console.log(res)

            return Promise.resolve(res.data)
        }).catch((err) => {
            console.log(err)
            return Promise.reject(err)
        })
  }

  export const geSingleDeal = (DealId) => dispatch => {
    return axios
        .get('/api/single/deal?DealId='+ DealId)
        .then((res) => {
            console.log(res)

            return Promise.resolve(res.data)
        }).catch((err) => {
            console.log(err)
            return Promise.reject(err)
        })
  }

  export const deleteInventory = inventoryData => dispatch => {
    return axios
      .post('api/remove/inventry', inventoryData)
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
  export const createDeal = inventoryData => dispatch => {
    return axios
      .post('api/deal', inventoryData)
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
  export const getDeal = () => dispatch => {
    return axios
        .get('/api/deal')
        .then((res) => {
            console.log(res)

            return Promise.resolve(res.data)
        }).catch((err) => {
            console.log(err)
            return Promise.reject(err)
        })


  }
  export const deleteDeal = inventoryData => dispatch => {
    return axios
      .post('api/remove/deal', inventoryData)
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


  export const createCategory = categoryData => dispatch => {
    return axios
      .post('api/category', categoryData)
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
  export const getCategory = () => dispatch => {
    return axios
        .get('/api/category')
        .then((res) => {
            console.log(res)

            return Promise.resolve(res.data)
        }).catch((err) => {
            console.log(err)
            return Promise.reject(err)
        })


  }
  export const deleteCategory = categoryData => dispatch => {
    return axios
      .post('api/remove/category', categoryData)
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