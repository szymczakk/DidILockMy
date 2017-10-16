import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  
});

function getTitleForButton(isLocked){
  return isLocked ? "Unlock the door" : "Lock the door";
};

export default class LockButtonComponent extends React.Component{
  constructor(props){
    super(props);
  };

  handleButtonClick = (e) =>{
    this.props.doorLockChange();
  };

  render(){
    return (
      <View>
        <Button onPress={this.handleButtonClick}
          title={getTitleForButton(this.props.isLocked)}/>
      </View>
    );
  }
}

LockButtonComponent.propTypes = {
  doorLockChange: PropTypes.func.isRequired,
  isLocked: PropTypes.bool.isRequired,
  onError: PropTypes.func
};