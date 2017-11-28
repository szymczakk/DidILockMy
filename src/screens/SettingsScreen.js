import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  
});

export default class SettingsScreen extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {t} = this.props.screenProps;
    return (
      <View style={ styles.container }>
        <Text>Settings</Text>
      </View>
    );
  }
};

SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
}
