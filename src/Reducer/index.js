import { combineReducers } from 'redux';
import GetListApiReducer from './GetListApiReducer';



 const appReducer = combineReducers({
    GetListApiReducer: GetListApiReducer,
  });

  const rootReducer = (state, action) => {
       return appReducer(state, action)
  }
  
    
  
  export default rootReducer;