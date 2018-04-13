import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
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
    this.syncStatus = this.syncStatus.bind(this);
    this.showAlertToRestart = this.showAlertToRestart.bind(this);
  }
  checkForUpdates = () => {
    CodePush.sync(CodePushConfig);
  };
  showAlertToRestart = () => {
    Alert.alert(
      "Update Available",
      "A new merchant has been added",
      [
        {
          text: "Ask me Later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Update Now",
          onPress: () => console.log("Update Now pressed")
        }
      ],
      { cancelable: false }
    );
  };
  syncStatus = status => {
    console.log("Sync Status = ", status);
    switch (status) {
      case 0:
        console.log("Up to date");
        this.showAlertToRestart();
        break;
      case 1:
        console.log("Update installed");
        this.showAlertToRestart();
        break;
      case 5:
        console.log("Checking for updates");
        break;
      case 8:
        console.log("Installing update");
        break;
    }
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
    CodePush.sync(
      {
        updateDialog: false,
        installMode: CodePush.InstallMode.ON_NEXT_RESUME
      },
      this.syncStatus
    );
    this.props.navigation.navigate("Second");
    //CodePush.restartApplication();
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
//AppRegistry.registerComponent("MyReactNativeApp", () => App);
