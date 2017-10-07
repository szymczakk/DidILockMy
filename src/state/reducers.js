import actionTypes from 'state/actionTypes';
import { combineReducers } from 'redux';

export default combineReducers({
  TOSRead: TOSReducer,
  locked: lockReducer,
});

function lockReducer(state = false, action){
  switch (action.type){
    case actionTypes.CHANGE_LOCK_STATE:
      return action.locked
    default:
      return state;
  };
};

function TOSReducer(state = false, action){
  switch (action.type){
    case actionTypes.SET_TOS_READ:
      return true;
    default:
      return state;
  };
};