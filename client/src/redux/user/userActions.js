import axios from 'axios'
import {

  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,

  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes'


// __ __  Register __ __ //
// __ __ __ __ __ __ __ _//
export const register = (payload) => {
  return (dispatch) => {
    dispatch(fetchRegisterRequest())
    axios
      .post('https://jsonplaceholder.typicode.com/users', payload)
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchRegisterSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchRegisterFailure(error.message))
      })
  }

}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

// __ __ Action Creators __ __ //
export const fetchRegisterRequest = () => {
  return {
    type: FETCH_REGISTER_REQUEST
  }
}

export const fetchRegisterSuccess = users => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    payload: users
  }
}

export const fetchRegisterFailure = error => {
  return {
    type: FETCH_REGISTER_FAILURE,
    payload: error
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}
