import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import I18n from '../../../src/services/translations/translation';
import CONSTANTS from '../../constants/styles';
import {ListItem, Left, Body, Icon, List} from 'native-base';

class PsychologistResult extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'visiting_these_centers'} />
        <View style={styles.bodyView}>
          <View style={styles.textView}>
            <Text style={styles.text}>
              {I18n.t('psychologists').toUpperCase()}
            </Text>
          </View>
          <View style={styles.imageView}>
            <Image
              source={require('../../assets/images/map.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.listView}>
            <List>
              <ListItem icon>
                <Left>
                  <Icon
                    type="FontAwesome"
                    name="angellist"
                    style={styles.icon}
                  />
                </Left>
                <Body>
                  <Text style={styles.listHeaderText}>Center 1</Text>
                  <Text style={styles.listDetailText}>
                    St bound street 67, 20127
                  </Text>
                  <Text style={styles.listDetailText}>+393404104091</Text>
                  {/* <Text style={styles.listDetailText}>center@gmail.com</Text> */}
                </Body>
              </ListItem>
              <ListItem icon style={styles.listItem}>
                <Left>
                  <Icon
                    type="FontAwesome"
                    name="angellist"
                    style={styles.icon}
                  />
                </Left>
                <Body>
                  <Text style={styles.listHeaderText}>Center 1</Text>
                  <Text style={styles.listDetailText}>
                    St bound street 67, 20127
                  </Text>
                  <Text style={styles.listDetailText}>+393404104091</Text>
                  {/* <Text style={styles.listDetailText}>center@gmail.com</Text> */}
                </Body>
              </ListItem>
            </List>
          </View>
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="RecommendResultScreen"
          rightScreenName="SectionMenuScreen"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c5980',
    justifyContent: 'center',
  },
  bodyView: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 10 : 1,
    paddingTop: Platform.OS === 'ios' ? '20%' : '17%',
    marginTop: Platform.OS === 'ios' ? '10%' : '12%',
    position: 'relative',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: Platform.OS === 'ios' ? 5 : 3,
  },
  image: {
    height: Platform.OS === 'ios' ? 350 : 250,
    width: 300,
  },
  textView: {
    paddingVertical: 10,
  },
  text: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.HEADER_H1_IOS
        : CONSTANTS.FONT.HEADER_H1_ANDROID,
    textAlign: 'center',
  },
  listView: {
    paddingVertical: 30,
    paddingHorizontal: 40,
    width: '95%',
  },
  icon: {
    fontSize: 40,
    color: CONSTANTS.COLOR.BRIGHT_TURQUOISE,
  },
  listItem: {
    paddingTop: 25,
    // paddingBottom: 25,
  },
  listHeaderText: {
    fontSize: Platform.OS === 'ios' ? 18 : 15,
    color: CONSTANTS.COLOR.WHITE,
  },
  listDetailText: {
    fontSize: 10,
    color: CONSTANTS.COLOR.WHITE,
  },
});

export default PsychologistResult;
