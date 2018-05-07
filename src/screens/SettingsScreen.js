import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";

import Repository from "util/repository";

const styles = StyleSheet.create({});

export default class SettingsScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    screenProps: PropTypes.object.isRequired
  };

  resetTos = () => {
    Repository.setItem("TOS:ACCEPTED", null);
  };

  aboutUsPressed = () => {
    this.props.navigation.navigate("Main");
  };

  howToUserPressed = () => {
    this.props.navigation.navigate("Main");
  };

  rateUsPressed = () => {
    this.props.navigation.navigate("Main");
  };

  render() {
    const { t } = this.props.screenProps;
    return (
      <View style={styles.container}>
        <Button onPress={this.resetTos} title="Reset props" />
        <Button
          onPress={this.aboutUsPressed}
          title={"screens:settings:aboutUsButton"}
        />
        <Button
          onPress={this.howToUserPressed}
          title={"screens:settings:howToUseButton"}
        />
        <Button
          onPress={this.rateUsPressed}
          title={"screens:settings:rateUsButton"}
        />
      </View>
    );
  }
}
