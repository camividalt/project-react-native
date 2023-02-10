// import { AppRegistry } from "react-native";
// import { App } from "./App.js";

// const appName = "Your app name";

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.runApplication(appName, {
//   // Mount the react-native app in the "root" div of index.html
//   rootTag: document.getElementById("root"),
// });



import { AppRegistry } from 'react-native';
import App from '../App';

if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent('React Native Web', () => App);
AppRegistry.runApplication('React Native Web', {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});