/* eslint-disable react-native/no-inline-styles */
/**
 * PsyScan mobile appi
 * git repo here
 * This app will interact with the Psyscan backend server.
 *
 */

import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import RootStackNavigator from './src/navigations/RootStackNavigator';
// import Home from './src/screens/Home';

// const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStackNavigator />
          {/* <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home} /> */}
          {/* <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} /> */}
          {/* </Stack.Navigator> */}
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default App;
