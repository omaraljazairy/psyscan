import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import BlockButton from '../components/buttons/BlockButton';
import Header from '../components/Headers/Header';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'welcome'} />
        <View style={styles.bodyView}>
          <View style={styles.imageView}>
            <Image
              source={require('../../src/assets/images/main_logo.gif')}
              style={styles.logo}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.introTextView}>
            <Text style={styles.introText}>
              Hola Ksenia, como estas. Porque Ksenia porque. no se no se.
            </Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <BlockButton
            text={'lets_start'}
            color="#20a2cb"
            screenName="IntroScreen"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c5980',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  imageView: {
    paddingBottom: 50,
    alignItems: 'center',
  },
  introTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: height_logo,
    height: height_logo,
    marginBottom: 0,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  introText: {
    color: '#fff',
    fontSize: 15,
    width: '40%',
    textAlign: 'center',
  },
  buttonView: {
    position: 'absolute',
    // marginTop: 100,
    bottom: '10%',
  },
});

export default Home;
