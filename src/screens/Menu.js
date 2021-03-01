import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  UIManager,
  LayoutAnimation,
  Text,
} from 'react-native';
import {Button} from 'galio-framework';
// import BottomButton from '../../components/buttons/BottomButton';
import BlockButton from '../components/buttons/BlockButton';
import Header from '../components/Headers/Header';
import Bottom from '../components/Bottoms/Bottom';
// import I18n from '../../src/services/translations/translation';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

class Menu extends Component {
  state = {
    expanded1: false,
    expanded2: false,
    expanded3: false,
    indexId: null,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'let_us_know_you'} />
        <View style={styles.bodyView}>
          <Button
            color={'#3294c4'}
            size={'large'}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              this.setState({expanded1: !this.state.expanded1, indexId: 0});
            }}>
            <Text>
              Premiminary Testing{' '}
              {this.state.expanded1 && this.state.indexId === 0
                ? 'collapse'
                : 'expand'}
              !
            </Text>
          </Button>
          {this.state.expanded1 && this.state.indexId === 0 && (
            <View style={styles.tile}>
              <Text>I disappear sometimes!</Text>
              <BlockButton
                btnSize="small"
                text="start_the_test"
                screenName="InfoFormScreen"
              />
            </View>
          )}
        </View>
        <View>
          <Button
            color={'#3294c4'}
            size={'large'}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              this.setState({expanded2: !this.state.expanded2, indexId: 1});
            }}>
            <Text>
              Advanced Testing{' '}
              {this.state.expanded2 && this.state.indexId === 1
                ? 'collapse'
                : 'expand'}
              !
            </Text>
          </Button>
          {this.state.expanded2 && this.state.indexId === 1 && (
            <View style={styles.tile}>
              <Text>
                Advanced testing is something i like. A me gusto Advanced
                testing.
              </Text>
              <BlockButton
                btnSize="small"
                text="start_the_test"
                screenName="SectionMenuScreen"
              />
            </View>
          )}
        </View>
        <View>
          <Button
            color={'#3294c4'}
            size={'large'}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              this.setState({expanded3: !this.state.expanded3, indexId: 2});
            }}>
            <Text>
              In Depth Analyses{' '}
              {this.state.expanded3 && this.state.indexId === 2
                ? 'collapse'
                : 'expand'}
              !
            </Text>
          </Button>
          {this.state.expanded3 && this.state.indexId === 2 && (
            <View style={styles.tile}>
              <Text>A me gusto In Depth Analyses.</Text>
              <BlockButton
                btnSize="small"
                text="start_the_test"
                screenName="MainPageScreen"
              />
            </View>
          )}
        </View>
        <Bottom text="PSYSCAN" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c5980',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  bodyView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 10 : 1,
    paddingTop: Platform.OS === 'ios' ? '30%' : '20%',
  },
  buttonTest: {
    width: 80,
    backgroundColor: '#fff',
  },
  tile: {
    backgroundColor: 'lightgrey',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});

export default Menu;
