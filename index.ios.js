/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Calculator from './Apps/calculator.js'
import Setting from './Apps/setting.js'

export default class PreworkCalculator extends Component {
  render() {
    return (
      <Calculator />
    );
  }
}

AppRegistry.registerComponent('PreworkCalculator', () => PreworkCalculator);
