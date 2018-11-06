import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Screens from 'screens/Screens';
import ToSScreen from 'screens/ToSScreen';
import MainScreen from 'screens/MainScreen';
import SettingsScreen from 'screens/SettingsScreen';
import SettingsButtonComponent from 'components/SettingButton';
import i18n from 'util/i18n';


const navi = {};
navi[Screens.MainScreen] = { 
  screen: props => <MainScreen {...props}/>,
  navigationOptions:({navigation, screenProps}) => ({
    headerTitle: screenProps.t("screens:main:screenTitle"),
    headerLeft: null
  })
};
navi[Screens.SettingsScreen] = {
  screen: props => <SettingsScreen {...props} />,
  navigationOptions: ({navigation, screenProps}) => ({
    headerTitle: screenProps.t("screens:settings:screenTitle"),
    headerRight: null
  })
};

const navigationConfiguration = {
  navigationOptions: ({navigation}) => ({
    gesturesEnabled: false,  
    headerRight: <SettingsButtonComponent navigation={{...navigation}} screenProps={{t: i18n.getFixedT()}}/>,
    headerTitleAllowFontScaling: false
  }),
  initialRouteName: Screens.MainScreen,
  headerMode: 'screen',
  header: { visible:false }
};

export default createStackNavigator(navi, navigationConfiguration);