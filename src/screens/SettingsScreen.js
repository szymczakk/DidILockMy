import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';

import Repository from 'util/repository';

const styles = StyleSheet.create({
  
});

export default class SettingsScreen extends React.Component{
  constructor(props){
    super(props);
  };
  
  resetTos = () => {
    Repository.setItem("TOS:ACCEPTED", null);
  };

  render(){
    const {t} = this.props.screenProps;
    return (
      <View style={ styles.container }>
        <Button onPress={this.resetTos} title="Reset props" />
      </View>
    );
  }
};

SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
}
