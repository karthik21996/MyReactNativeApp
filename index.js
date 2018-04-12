import { AppRegistry } from "react-native";
import App from "./App";

import SecondScreen from "./SecondScreen";
import { StackNavigator } from "react-navigation";
const NavigationStack = StackNavigator({
  First: {
    screen: App,
    navigationOptions: {
      title: "First"
    }
  },

  Second: {
    screen: SecondScreen,
    navigationOptions: {
      title: "Second"
    }
  }
});
AppRegistry.registerComponent("MyReactNativeApp", () => NavigationStack);
//AppRegistry.registerComponent('MyReactNativeApp', () => App);
