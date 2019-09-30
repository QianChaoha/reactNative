/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Hello from './js/page/Hello'
import Main from './js/page/Main'
import BViewDemo from './js/page/BViewDemo'
import ImageDemo from './js/page/ImageDemo'
import TextInputDemo from './js/page/TextInputDemo'
import Smzq from './js/page/Smzq'
import ScrollViewDemo from './js/page/ScrollViewDemo'
import ListViewDemo from './js/page/ListViewDemo'
import JggListView from './js/page/JggListView'
import CarListView from './js/page/CarListView'
import TabBarDemo from './js/page/TabBarDemo'
import LifeCycleDemo from './js/page/LifeCycleDemo'

const SimpleApp = StackNavigator({
  //默认加载第一个页面，这里用来注册需要跳转的页面 相当于Manifest.xml文件
  Main: { screen: Main },
  Hello: { screen: Hello },
  BViewDemo: { screen: BViewDemo },
  ImageDemo: { screen: ImageDemo },
  TextInputDemo: { screen: TextInputDemo },
  Smzq: { screen: Smzq },
  ScrollViewDemo: { screen: ScrollViewDemo },
  ListViewDemo: { screen: ListViewDemo },
  JggListView: { screen: JggListView },
  CarListView: { screen: CarListView },
  TabBarDemo: { screen: TabBarDemo },
  LifeCycleDemo: { screen: LifeCycleDemo },
});
export default class App extends React.Component {
  render() {
    return (
        <SimpleApp/>
    );
  }
}