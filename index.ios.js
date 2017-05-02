/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Calculator from './Apps/calculator.js'
import Setting from './Apps/setting.js'

export default class PreworkCalculator extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='calculatorPage' component={Calculator} title='Prework Calculator' initial={true} />
          <Scene key='settingPage' component={Setting} title='Setting Page' />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('PreworkCalculator', () => PreworkCalculator);
