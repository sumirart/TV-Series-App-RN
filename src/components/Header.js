import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={style.header}>
      <Text style={style.title}>Hello!</Text>
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
