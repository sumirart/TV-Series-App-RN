/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import component
import Header from './src/components/Header';
import Series from './src/screens/Series';
import SingleSeries from './src/screens/SingleSeries';

const Main = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <Series />
      </SafeAreaView>
    </>
  );
};

// better separate to another file
const AppNavigator = createStackNavigator({
  Home: {
    screen: Main,
  },
  SingleSeries,
});

export default createAppContainer(AppNavigator);
