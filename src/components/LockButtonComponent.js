import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class LockButtonComponent extends React.Component{
  constructor(props){
    super(props);
  }

  handleButtonClick = (e) =>{
    this.props.doorLockedChange();
  }

  render(){
    return (
      <View>
        <Button onPress={this.handleButtonClick}
          title="Press me!"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});