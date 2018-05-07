import React from "react";
import { Button, View, Text } from "react-native";
import PropTypes from "prop-types";

import Repository from "util/repository";
import Screens from "./Screens";

export default class SplashScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    screenProps: PropTypes.object.isRequired
  };

  getInitialRoute = () => {
    return Repository.getItem("TOS:ACCEPTED").then(val => {
      if (val == true) {
        return Screens.MainScreen;
      }
      return Screens.ToSScreen;
    });
  };

  componentDidMount = () => {
    this.getInitialRoute().then(val => {
      setTimeout(() => {
        this.props.navigation.navigate(val);
      }, parseFloat(this.props.splashScreenTimeout));
    });
  };

  render() {
    return (
      <View>
        <Text>SplashScreen</Text>
      </View>
    );
  }
}
