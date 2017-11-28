import React from 'react';
import { Button, View, Text } from "react-native";
import PropTypes from 'prop-types';

import Repository from 'util/repository';

export default class SplashScreen extends React.Component{
  constructor(props){
    super(props);
  };

  getInitialRoute = () => {
    return Repository.getItem("TOS:ACCEPTED").then((val) => {    
        if(val == true){
          return "Main";
        }
        return "ToS";
    }); 
  };

  componentDidMount = () => {
    this.getInitialRoute().then(val => {
      setTimeout(() => {
        this.props.navigation.navigate(val);
      }, 1500);
    });
  };

  render(){
    return(
      <View>
        <Text>SplashScreen</Text>
      </View>
    )
  }
}


SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
}
