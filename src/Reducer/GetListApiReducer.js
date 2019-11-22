import * as actionTypes from '../Action';


const initialState = {
  response: {},
  error: '',
  isLoading: false
};

const GetListApiReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case actionTypes.GET_LIST_REQUEST:
    return {
      ...state,
      response:{},
      isLoading: true
    }
    case actionTypes.GET_LIST_SUCCESS:
    return {
      ...state,
      isLoading: false,
      response: action.value
    }
    case actionTypes.GET_LIST_FAILURE:
    return {
      ...state,
      isLoading: false
    }
    default:
  return state;
  }

}
export default GetListApiReducer;
