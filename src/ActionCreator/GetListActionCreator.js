import * as actionTypes from '../Action';
import { hitGetAPI } from '../Network/Server';


export const getListRequest = () => {
    return {
        type: actionTypes.GET_LIST_REQUEST,
    }
}

export const getListSuccess = (json) => {
    return {
        type: actionTypes.GET_LIST_SUCCESS,
         value: json
    }
}

export const getListFailure = err => {
   return {
       type: actionTypes.GET_LIST_FAILURE,
   }
}

export const getListApiIntegrationMethod = (URL) => {
    return (dispatch, getState) => {
        dispatch(getListRequest())
        hitGetAPI(URL)
        .then(([response, json]) => {
            console.log('URL===>', URL)
            console.log('response api===', json)
            dispatch(getListSuccess(json))
        })
        .catch((error) => dispatch(getListFailure()))
    }


}