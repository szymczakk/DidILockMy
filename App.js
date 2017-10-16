import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { translate } from 'react-i18next';

import i18n from 'util/i18n';
import MainScreen from 'screens/MainScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa'
  }
});

const AppNavigation = StackNavigator(
  {
    Main: { 
      screen: MainScreen,
      // navigationOptions:({navigation}) => ({
      //   title: "Did you lock your door?"
      // })
    },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,  
      headerRight: <Button title="Info" />,
    }
  }
);

const WrapNavigation = () => {
  return <AppNavigation  screenProps={{ t: i18n.getFixedT() }}/>;
}

const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false
})(WrapNavigation);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ReloadAppOnLanguageChange />
      </View>
    );
  }
};
