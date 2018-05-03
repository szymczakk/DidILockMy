import React from 'react';
import { StackNavigator } from 'react-navigation';
import Screens from 'screens/Screens';
import SplashScreen from 'screens/SplashScreen';
import Settings from 'util/settings.json'

const navi = {};

navi[Screens.SplashScreen] = 
{
  screen: props => <SplashScreen {...props} {...Settings}/>,
  navigationOptions: ({navigation, screenProps}) => ({
    headerTitle: null,
    headerLeft: null,
    headerRight: null
  })
}


export default StackNavigator(navi);