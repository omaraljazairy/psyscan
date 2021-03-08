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
// Text Analysis
import TextAnalysisFirst from '../screens/advanced/TextAnalysisFirst';
import TextAnalysisSecond from '../screens/advanced/TextAnalysisSecond';
import TextAnalysisThird from '../screens/advanced/TextAnalysisThird';
import TextAnalysisFourth from '../screens/advanced/TextAnalysisFourth';
import TextAnalysisResultFirst from '../screens/advanced/TextAnalysisResultFirst';
import TextAnalysisResultSecond from '../screens/advanced/TextAnalysisResultSecond';
import TextAnalysisResultThird from '../screens/advanced/TextAnalysisResultThird';
// Audio analysis
import AudioAnalysisFirst from '../screens/advanced/AudioAnalysisFirst';
import AudioAnalysisSecond from '../screens/advanced/AudioAnalysisSecond';
import AudioAnalysisThird from '../screens/advanced/AudioAnalysisThird';
import AudioAnalysisResult from '../screens/advanced/AudioAnalysisResult';

// Face scan
import FaceScanFirst from '../screens/advanced/FaceScanFirst';
import FaceScanSecond from '../screens/advanced/FaceScanSecond';
import FaceScanThird from '../screens/advanced/FaceScanThird';
import FaceScanResult from '../screens/advanced/FaceScanResult';

// Video analysis
import VideoAnalysisFirst from '../screens/advanced/VideoAnalysisFirst';
import VideoAnalysisSecond from '../screens/advanced/VideoAnalysisSecond';
import VideoAnalysisResult from '../screens/advanced/VideoAnalysisResult';

// Advanced testing results
import YourResult from '../screens/advanced/YourResult';
import RecommendResult from '../screens/advanced/RecommendResult';
import PsychologistResult from '../screens/advanced/PsychologistResult';

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
      name="TextAnalysisFourthScreen"
      component={TextAnalysisFourth}
    />
    <RootStack.Screen
      name="YourActivityResultsScreen"
      component={YourActivityResults}
    />
    <RootStack.Screen
      name="TextAnalysisResultFirstScreen"
      component={TextAnalysisResultFirst}
    />
    <RootStack.Screen
      name="TextAnalysisResultSecondScreen"
      component={TextAnalysisResultSecond}
    />
    <RootStack.Screen
      name="TextAnalysisResultThirdScreen"
      component={TextAnalysisResultThird}
    />

    <RootStack.Screen
      name="AudioAnalysisFirstScreen"
      component={AudioAnalysisFirst}
    />
    <RootStack.Screen
      name="AudioAnalysisSecondScreen"
      component={AudioAnalysisSecond}
    />
    <RootStack.Screen
      name="AudioAnalysisThirdScreen"
      component={AudioAnalysisThird}
    />
    <RootStack.Screen
      name="AudioAnalysisResultScreen"
      component={AudioAnalysisResult}
    />

    <RootStack.Screen name="FaceScanFirstScreen" component={FaceScanFirst} />
    <RootStack.Screen name="FaceScanSecondScreen" component={FaceScanSecond} />
    <RootStack.Screen name="FaceScanThirdScreen" component={FaceScanThird} />
    <RootStack.Screen name="FaceScanResultScreen" component={FaceScanResult} />

    <RootStack.Screen
      name="VideoAnalysisFirstScreen"
      component={VideoAnalysisFirst}
    />
    <RootStack.Screen
      name="VideoAnalysisSecondScreen"
      component={VideoAnalysisSecond}
    />
    <RootStack.Screen
      name="VideoAnalysisResultScreen"
      component={VideoAnalysisResult}
    />

    <RootStack.Screen name="YourResultScreen" component={YourResult} />
    <RootStack.Screen
      name="RecommendResultScreen"
      component={RecommendResult}
    />
    <RootStack.Screen
      name="PsychologistResultScreen"
      component={PsychologistResult}
    />

    <RootStack.Screen name="MainPageScreen" component={MainPage} />
  </RootStack.Navigator>
);

export default RootStackNavigator;
