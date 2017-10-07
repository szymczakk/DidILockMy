import actionTypes from 'state/actionTypes';

export default {
  setLockState(newState){
    return {
      type: actionTypes.changeLockState,
      locked: newState
    };
  },

  setTOSAsRead(){
    console.log(actionTypes);
    return {
      type: actionTypes.setTOSAsRead,
      TOSRead: true
    };
  }
};