import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import configureStore from "state/configureStore";

import HomeScreen from 'screens/HomeScreen';

const store = configureStore();
const AppNavigation = StackNavigator({
    Main: { 
      screen: HomeScreen,
      navigationOptions:({navigation}) => ({
        title: "Welcome!"
      })
    },
  },
  {
    headerMode: "screen",
    navigationOptions: {
      gesturesEnabled: false,
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigation />
        </View>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  }
});
