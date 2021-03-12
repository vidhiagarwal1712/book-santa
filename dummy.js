import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import BookDonateScreen from './screens/BookDonateScreen'
import BookRequestScreen from './screens/BookRequestScreen'
export default class App extends React.Component {
  render()
  {
  return (
    <AppContainer/>
  );
  }
}
const BottomNavigator=createBottomTabNavigator({
  Donation : {screen :  BookDonateScreen},
  Request : {screen :  BookRequestScreen }
})
const SwitchNavigator = createSwitchNavigator({
  Home : {screen:WelcomeScreen},
  Tab : { screen:BottomNavigator}
})
const AppContainer = createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
