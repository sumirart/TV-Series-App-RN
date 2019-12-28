import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import _ from 'lodash';

const Header = () => {
  const arr = [
    'Halo',
    'Hi',
    'Hello',
    'Bonjour',
    'Hola',
    'Guten Tag',
    'Ciao',
    'Olà',
    'Namaste',
    'Salaam',
  ];

  const greeting = _.sample(arr);
  return (
    <View style={style.header}>
      <Text style={style.title}>{greeting}!</Text>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  header: {
    height: 220,
    backgroundColor: '#FFBB27',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
