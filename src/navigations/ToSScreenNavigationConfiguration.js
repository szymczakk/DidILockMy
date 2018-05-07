import React from 'react';
import { StackNavigator } from 'react-navigation';
import Screens from 'screens/Screens';
import ToSScreen from 'screens/ToSScreen';

const navi = {};

navi[Screens.ToSScreen] = {
  screen: props => <ToSScreen {...props}/>,
  navigationOptions: ({navigation, screenProps}) => ({
    headerTitle: screenProps.t("screens:tos:screenTitle"),
    headerRight: null,
    headerLeft: null
  })
}

export default StackNavigator(navi);


