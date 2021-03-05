import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Menu from '../screens/Menu';
import InfoForm from '../screens/preliminary/InfoForm';
import Orientations from '../screens/preliminary/Orientations';
// advanced testing secion screens
import SectionMenu from '../screens/advanced/SectionsMenu';
import YourActivity from '../screens/advanced/YourActivity';
import YourActivityResults from '../screens/advanced/YourActivityResults';
import TextAnalysisFirst from '../screens/advanced/TextAnalysisFirst';
import TextAnalysisSecond from '../screens/advanced/TextAnalysisSecond';
import TextAnalysisThird from '../screens/advanced/TextAnalysisThird';

import MainPage from '../screens/indepth/MainPage';

const RootStack = createStackNavigator();

const RootStackNavigator = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    {/* <RootStack.Navigator> */}
    <RootStack.Screen name="HomeScreen" component={Home} />
    <RootStack.Screen name="IntroScreen" component={Intro} />
    <RootStack.Screen name="LoginScreen" component={Login} />
    <RootStack.Screen name="RegisterScreen" component={Register} />
    <RootStack.Screen name="MenuScreen" component={Menu} />
    <RootStack.Screen name="InfoFormScreen" component={InfoForm} />
    <RootStack.Screen name="OrientationsScreen" component={Orientations} />
    <RootStack.Screen name="SectionMenuScreen" component={SectionMenu} />
    <RootStack.Screen name="YourActivityScreen" component={YourActivity} />
    <RootStack.Screen
      name="TextAnalysisFirstScreen"
      component={TextAnalysisFirst}
    />
    <RootStack.Screen
      name="TextAnalysisSecondScreen"
      component={TextAnalysisSecond}
    />
    <RootStack.Screen
      name="TextAnalysisThirdScreen"
      component={TextAnalysisThird}
    />
    <RootStack.Screen
      name="YourActivityResultsScreen"
      component={YourActivityResults}
    />

    <RootStack.Screen name="MainPageScreen" component={MainPage} />
  </RootStack.Navigator>
);

export default RootStackNavigator;
