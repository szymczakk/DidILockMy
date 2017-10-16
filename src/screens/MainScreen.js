import React from 'react';
import { Alert, Text, Button, View, StyleSheet } from "react-native";

import LockButtonComponent from 'components/LockButtonComponent';
import StatusComponent from 'components/StatusComponent';

import i18n from 'util/i18n';
import DoorLockStateRepository from 'util/doorLockStateRepository';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  }
});

export default class MainScreen extends React.Component{
  doorLockStateRepo = null;

  constructor(props){
    super(props);

    this.state = {
      doorLocked: false
    };

    doorLockStateRepo = new DoorLockStateRepository();
  };
  
  componentWillMount(){
    doorLockStateRepo.getLockState().then( (value) => {
      if(value == null){
        value = false;
      }
      
      value = value == 'true'? true: false;
      
      this.setState({
        doorLocked: value
      });
    }).catch(this.handleError);
  };

  handleError = (e) => {
    console.log(e);
    Alert.alert(e.message);
  };

  doorLockChange = () =>{
    const lockStatus = !this.state.doorLocked;
    
    doorLockStateRepo.setLockState(lockStatus).then(() =>{
      this.setState({
        doorLocked: lockStatus
      });
    }).catch(this.handleError);
  };

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusComponent doorLocked={this.state.doorLocked}/>
        <LockButtonComponent doorLockChange={this.doorLockChange} isLocked={this.state.doorLocked}/>
      </View>
    );
  };
};
