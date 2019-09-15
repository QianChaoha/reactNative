/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
//import LoginView from './LoginView';
//引入外部的js文件
var LoginView = require('./LoginView');
export default class TextInputDemo extends Component {
    render() {
        return (
            <LoginView/>
        );
    }
}

