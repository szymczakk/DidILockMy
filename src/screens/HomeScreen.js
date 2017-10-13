import React from 'react';
import { Text, Button, View } from "react-native";

import LockButtonComponent from 'components/LockButtonComponent';
import StatusComponent from 'components/StatusComponent';

import DoorLockStateRepository from 'util/doorLockStateRepository';

export default class HomeScreen extends React.Component{
  repository = null;

  constructor(props){
    super(props);

    this.state = {
      doorLocked: false
    };

    doorLockStateRepo = new DoorLockStateRepository();
  }
  
  componentWillMount(){
    doorLockStateRepo.getLockState().then( (value) => {
      if(value == null){
        value = false;
      }
      value = value == 'true'? true: false;
      this.setState({
        doorLocked: value
      });

    });
  };

  doorLockChange = () =>{
    const lockStatus = !this.state.doorLocked;
    
    doorLockStateRepo.setLockState(lockStatus).then(() =>{
      this.setState({
        doorLocked: lockStatus
      });
    }).catch((e) =>{
      console.error(e);
    });
  };

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <StatusComponent doorLocked={this.state.doorLocked}/>
        <LockButtonComponent doorLockedChange={this.doorLockChange}/>
      </View>
    );
  };
};
