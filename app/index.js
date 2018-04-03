/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MainPage from './components/index';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainPage style={styles.content} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    backgroundColor: '#4BC1D2',
  },
  headerContent: {
    fontSize: 20,
  },
  content: {
    width: '100%',
    height: '90%',
  }
});
