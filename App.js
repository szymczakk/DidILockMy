import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from 'screens/MainScreen';

const AppNavigation = StackNavigator(
  {
    Main: { 
      screen: MainScreen,
      navigationOptions:({navigation}) => ({
        title: "Did you lock your door?"
      })
    },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,  
      headerRight: <Button title="Info" />,
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa'
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <AppNavigation />
      </View>
    );
  }
};
