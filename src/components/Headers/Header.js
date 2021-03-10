import React, {useState} from 'react';
import {StyleSheet, Text, View, Platform, Modal} from 'react-native';
import I18n from '../../services/translations/translation';
import {Divider} from 'react-native-elements';
import {Icon} from 'native-base';
import CONSTANTS from '../../constants/styles';
import {useNavigation} from '@react-navigation/native';

const Header = (props) => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const text = props.text;
  const divider = props.noDivider ? null : <Divider style={styles.divider} />;

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.header}>
      <View style={styles.iconView}>
        {/* <Tooltip popover={<Text>Testing</Text>}> */}
        <Icon
          type="AntDesign"
          name="down-square-o"
          style={styles.icon}
          onPress={toggleOverlay}
        />
        {/* </Tooltip> */}
      </View>
      <Text style={styles.text}>{I18n.t(text).toUpperCase()}</Text>
      {divider}
      <Modal transparent={true} visible={visible}>
        <View style={styles.modalView}>
          <View style={styles.modelContentView}>
            <View style={styles.modalElements}>
              <View style={styles.modalContent}>
                <Icon
                  type="AntDesign"
                  name="down-square-o"
                  style={styles.iconModal}
                  onPress={toggleOverlay}
                />
                <View style={styles.textView}>
                  <View style={styles.section}>
                    <Text style={styles.headerSection}>TESTING</Text>
                    <Divider style={styles.dividerSection} />
                    <Text
                      style={styles.linkSection}
                      onPress={() => {
                        toggleOverlay();
                        navigation.navigate('InfoFormScreen', {});
                      }}>
                      PERLIMINARY TESTING
                    </Text>
                    <Text
                      style={styles.linkSection}
                      onPress={() => {
                        toggleOverlay();
                        navigation.navigate('SectionMenuScreen', {});
                      }}>
                      ADVANCED TESTING
                    </Text>
                    <Text
                      style={styles.linkSection}
                      onPress={() => {
                        toggleOverlay();
                        navigation.navigate('MainPageScreen', {});
                      }}>
                      IN DEPTH ANALYSIS
                    </Text>
                  </View>
                  <View style={styles.section}>
                    <Text style={styles.headerSection}>YOU</Text>
                    <Divider style={styles.dividerSection} />
                    <Text style={styles.linkSection}>YOUR PROFILE</Text>
                    <Text
                      style={styles.linkSection}
                      onPress={() => {
                        toggleOverlay();
                        navigation.navigate('JournalScreen', {});
                      }}>
                      YOUR RESULTS
                    </Text>
                  </View>
                  <View style={styles.section}>
                    <Text style={styles.headerSection}>APPOINTMENTS</Text>
                    <Divider style={styles.dividerSection} />
                    <Text style={styles.linkSection}>APPOINTMENT 1</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 10,
    marginTop: Platform.OS === 'ios' ? '10%' : '1%',
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    flexWrap: 'wrap',
    flexShrink: 2,
    color: '#fff',
    textAlign: 'center',
    width: 200,
    fontSize: Platform.OS === 'ios' ? 20 : 18,
    paddingBottom: 10,
  },
  iconView: {
    left: 10,
    position: 'absolute',
  },
  modalView: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modelContentView: {
    backgroundColor: CONSTANTS.COLOR.WHITE,
    margin: 50,
    paddingBottom: 170,
    borderRadius: 10,
  },
  modalElements: {
    position: 'absolute',
    top: 3,
    width: '100%',
  },
  modalContent: {
    flex: 2,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  textView: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
    paddingTop: 10,
  },
  icon: {
    color: CONSTANTS.COLOR.WHITE,
  },
  iconModal: {
    color: CONSTANTS.COLOR.EASTERN_BLUE,
    paddingRight: 5,
    fontSize: 20,
  },
  divider: {
    backgroundColor: '#000',
    height: 3,
    width: 200,
    alignSelf: 'center',
  },
  backdrop: {
    backgroundColor: CONSTANTS.COLOR.WHITE,
    height: Platform.OS === 'ios' ? '40%' : '45%',
    width: Platform.OS === 'ios' ? '60%' : '50%',
    top: Platform.OS === 'ios' ? 90 : 50,
    left: 11,
    borderRadius: 10,
  },
  overlay: {
    backgroundColor: CONSTANTS.COLOR.BRIGHT_TURQUOISE,
    paddingHorizontal: 20,
  },
  sections: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerSection: {
    color: CONSTANTS.COLOR.EASTERN_BLUE,
    fontWeight: 'bold',
  },
  dividerSection: {
    backgroundColor: CONSTANTS.COLOR.EASTERN_BLUE,
    height: 3,
    width: '100%',
    alignSelf: 'center',
  },
  linkSection: {
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.DESCRIPTION_2_SIZE_IOS
        : CONSTANTS.FONT.DESCRIPTION_2_SIZE_ANDROID,
    color: CONSTANTS.COLOR.EASTERN_BLUE,
  },
});

export default Header;
