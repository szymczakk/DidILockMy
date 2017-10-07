import React from 'react';
import { Text, Button, View } from "react-native";

export default class HomeScreen extends React.Component{
  
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Home screen WELCOME!</Text>
      </View>
    );
  }
};
