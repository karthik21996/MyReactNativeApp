import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import CodePush from "react-native-code-push";
import { StackNavigator } from "react-navigation";

const CodePushConfig = {
  updateDialog: false,
  installMode: CodePush.InstallMode.IMMEDIATE
};

export default class MyReactNativeApp extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onButtonPressWithCodePush = this.onButtonPressWithCodePush.bind(this);
  }
  checkForUpdates = () => {
    CodePush.sync(CodePushConfig);
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Version 5!</Text>
        <Button
          title="Go to second screen (old one)"
          onPress={this.onButtonPress}
        />
        <Button
          title="Go to second screen"
          onPress={this.onButtonPressWithCodePush}
        />
      </View>
    );
  }

  onButtonPress() {
    this.props.navigation.navigate("Second");
  }

  onButtonPressWithCodePush() {
    CodePush.sync({
      updateDialog: false,
      installMode: CodePush.InstallMode.IMMEDIATE
    });
    this.props.navigation.navigate("Second");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20
  }
});
// const App = CodePush(CodePushConfig)(MyReactNativeApp);
AppRegistry.registerComponent("MyReactNativeApp", () => App);
