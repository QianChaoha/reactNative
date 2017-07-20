/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
//引入外部的js文件
var LoginView = require('./loginView');
export default class TextInputDemo extends Component {
    render() {
        return (
            <LoginView/>
        );
    }
}

AppRegistry.registerComponent('TextInputDemo', () => TextInputDemo);
