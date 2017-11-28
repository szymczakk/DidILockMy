import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { translate } from 'react-i18next';

import i18n from 'util/i18n';

import MainScreen from 'screens/MainScreen';
import ToSScreen from 'screens/ToSScreen';
import SettingsScreen from 'screens/SettingsScreen';
import SplashScreen from 'screens/SplashScreen';

import SettingsButtonComponent from 'components/settingButton/SettingsButtonComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa'
  }
});

const AppNavigation = StackNavigator(
  {
    Splash:{
      screen: props => <SplashScreen {...props} />,
      navigationOptions: ({navigation, screenProps}) => ({
        headerTitle: null,
        headerLeft: null,
        headerRight: null
      })
    },
    ToS: {
      screen: props => <ToSScreen {...props}/>,
      navigationOptions: ({navigation, screenProps}) => ({
        headerTitle: screenProps.t("screens:tos:screenTitle"),
        headerRight: null,
        headerLeft: null
      })
    },
    Main: { 
      screen: props => <MainScreen {...props}/>,
      navigationOptions:({navigation, screenProps}) => ({
        headerTitle: screenProps.t("screens:main:screenTitle"),
        headerLeft: null
      })
    },
    Settings: {
      screen: props => <SettingsScreen {...props} />,
      navigationOptions: ({navigation, screenProps}) => ({
        headerTitle: screenProps.t("screens:settings:screenTitle"),
        headerRight: null
      })
    }
  },
  {
    navigationOptions: ({navigation}) => ({
      gesturesEnabled: false,  
      headerRight: <SettingsButtonComponent navigation={{...navigation}} screenProps={{t: i18n.getFixedT()}}/>,
      headerTitleAllowFontScaling: false
    }),
    initialRouteName: "Splash"
  },
);

const WrapNavigation = () => {
  return <AppNavigation screenProps={{t: i18n.getFixedT()}}/>;
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
