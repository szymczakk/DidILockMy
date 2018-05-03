import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

import Screens from 'screens/Screens'

const styles = StyleSheet.create({
  settingImage:{
    height: 30,
    width: 30
  },
  settingImageContainer:{
    paddingRight: 15,
    paddingLeft: 15
  }
});

export default class SettingsButtonComponent extends React.Component{
  constructor(props){
    super(props);
  };

  onPressButton = () => {
    this.props.navigation.navigate(Screens.SettingsScreen);
  };

  render(){
    return (
      <View>
        <TouchableOpacity style={styles.settingImageContainer} onPress={this.onPressButton}>
          <Image
            source={require("./assets/setting-icon.png")}
            style={styles.settingImage}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

SettingsButtonComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};