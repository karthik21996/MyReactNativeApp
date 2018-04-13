import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CodePush from "react-native-code-push";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
class SecondScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>THIS IS THE SECOND SCREEN!</Text>
        <Text style={styles.welcome}>
          Appreciate for your help! Well done!!!
        </Text>
        <Text style={styles.welcome}>
          Appreciate for your help! Well done!!!
        </Text>
      </View>
    );
  }
}

SecondScreen.navigationOptions = {
  title: "Second Screen Title"
};

export default SecondScreen;
