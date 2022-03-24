import {
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,


  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default: return state
  }
}



export const register = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: ''
      }
    case FETCH_REGISTER_FAILURE:
      return {
        loading: false,
        user: [],
        error: action.payload
      }
    default:
      return state;
  }
};

// export const login = (state = {}, action) => {
//   switch (action.type) {
//     case types.SET_USER_DATA:
//       return {
//         ...state,
//         ...action.payload,
//       };
//     default:
//       return state;
//   }
// };



