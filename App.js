import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { SwitchNavigator } from 'react-navigation';
import { translate } from "react-i18next";

import i18n from "util/i18n";

import loadingScreenNavigation from 'navigations/loadingScreenNavigationConfiguration';
import tosScreenNavigation from 'navigations/ToSScreenNavigationConfiguration';
import appNavigation from 'navigations/appNavigationConfiguration';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa"
  }
});

const SwitchNavigation = SwitchNavigator(
  {
    LoadingNavigation: loadingScreenNavigation,
    AppNavigation: appNavigation,
    ToSNavigation: tosScreenNavigation
  }
);

const WrapNavigation = () => {
  return <SwitchNavigation screenProps={{t: i18n.getFixedT()}}/>;
};

const ReloadAppOnLanguageChange = translate("common", {
  bindI18n: "languageChanged",
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
