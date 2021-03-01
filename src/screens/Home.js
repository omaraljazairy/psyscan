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
import Title from '../components/texts/Title';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Title text={'welcome'} />
          </View>
          <View>
            <Image
              source={require('../../src/assets/images/main_logo.gif')}
              style={styles.logo}
              resizeMode="stretch"
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.introText}>
            Psysan is ksenia and Ksenia is Psyscan dsnjsdnsd djssndns djs sj s s
            sjdl sj safesdsj dj sjdjs j sk k dsj sk
          </Text>
          <View style={styles.buttonView}>
            <BlockButton
              text={'lets_start'}
              color="#20a2cb"
              screenName="IntroScreen"
            />
          </View>
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
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
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
    width: '80%',
    textAlign: 'center',
    position: 'absolute',
    top: '1%',
  },
  buttonView: {
    position: 'absolute',
    bottom: '10%',
  },
});

export default Home;
