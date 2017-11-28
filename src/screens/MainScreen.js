import React from 'react';
import { Alert, Text, Button, View, StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import LockButtonComponent from 'components/lockButton/LockButtonComponent';
import StatusComponent from 'components/status/StatusComponent';

import Repository from 'util/repository';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  }
});

export default class MainScreen extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      doorLocked: false
    };
  };
  
  componentWillMount(){
    Repository.getItem("doorLockState").then((value) => {
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
    Alert.alert(e.message);
  };

  doorLockChange = () =>{
    const lockStatus = !this.state.doorLocked;
    
    Repository.setItem("doorLockState", lockStatus).then(() =>{
      this.setState({
        doorLocked: lockStatus
      });
    }).catch(this.handleError);
  };

  render(){
    return (
      <View style={styles.container}>
        <StatusComponent doorLocked={this.state.doorLocked} {...this.props}/>
        <LockButtonComponent doorLockChange={this.doorLockChange} isLocked={this.state.doorLocked}    {...this.props} />
      </View>
    );
  };
};

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
}
