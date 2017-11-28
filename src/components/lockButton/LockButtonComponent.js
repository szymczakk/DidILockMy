import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  
});

export default class LockButtonComponent extends React.Component{
  constructor(props){
    super(props);
  };

  handleButtonClick = (e) =>{
    this.props.doorLockChange();
  };

  getTitleForButton = (isLocked) => {
    const {t} = this.props.screenProps;
    return isLocked ? t("components:lockButton:unlockTheDoor") : t("components:lockButton:lockTheDoor");
  }

  render(){
    return (
      <View>
        <Button onPress={this.handleButtonClick}
          title={this.getTitleForButton(this.props.isLocked)}/>
      </View>
    );
  }
}

LockButtonComponent.propTypes = {
  doorLockChange: PropTypes.func.isRequired,
  isLocked: PropTypes.bool.isRequired,
  onError: PropTypes.func,
  screenProps: PropTypes.object.isRequired
};