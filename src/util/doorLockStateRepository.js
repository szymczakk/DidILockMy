import {AsyncStorage} from 'react-native';

class BaseRepository{
  baseRepoKeyPrefix = "DidILockMyDoor::";

  constructor(){}
  
  getBaseKey(){
    return this.baseRepoKeyPrefix;
  };

  async getItem(key){
    return await AsyncStorage.getItem(key);
  };

  async setItem(key, value){
    await AsyncStorage.setItem(key, value);
  };
}

export default class DoorLockStateRepository extends BaseRepository{
  key = "";

  constructor(){
    super();
    this.key = super.getBaseKey() + "DoorLockState";
  }
  
  async getLockState(){
    return await super.getItem(this.key);
  };

  async setLockState(value){
    await super.setItem(this.key, value.toString());
  };
}
