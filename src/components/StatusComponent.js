import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class StatusComponent extends React.Component{
  constructor(props){
    super(props);
  };

  _renderDoorWarningText = () =>{
    if(this.props.doorLocked){
      return(
        <Text style={styles.closedText}>Door closed :)</Text>
      )
    }else {
      return(
        <Text style={styles.openedText}>Door opened!!</Text>
      )
    }
  }

  render(){
    return(
      <View>
        <Text style={styles.baseText}>
          {this._renderDoorWarningText()}
        </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 40,
    fontWeight: 'bold'
  },

  openedText: {
    color: 'red'
  },

  closedText: {
    color: 'green'
  }
});