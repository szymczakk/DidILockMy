import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from 'screens/HomeScreen';

const AppNavigation = StackNavigator({
    Main: { 
      screen: HomeScreen,
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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} animated={true} />
        <AppNavigation />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  }
});
