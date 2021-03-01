import React, {Component} from 'react';
import {View, Platform, StyleSheet, Text} from 'react-native';
import {Accordion, Block} from 'galio-framework';

const data = [
  {
    title: 'First Chapter',
    content: 'Lorem ipsum dolor sit amet',
    icon: {
      name: 'keyboard-arrow-up',
      family: 'material',
      size: 16,
    },
  },
  {title: '2nd Chapter', content: 'Lorem ipsum dolor sit amet'},
  {title: '3rd Chapter', content: 'Lorem ipsum dolor sit amet'},
];
const MainMenu = () => {
  return (
    <>
      <Block style={styles.block} opened={null}>
        <Accordion
          dataArray={data}
          listStyle={styles.list}
          headerStyle={styles.header}
        />
      </Block>
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 400,
  },
  list: {
    backgroundColor: '#0c5980',
    borderColor: '#fff',
    borderWidth: 0,
  },
  header: {
    height: 100,
    borderWidth: 1,
  },
});

export default MainMenu;
