/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Navigator } from 'react-native-deprecated-custom-components';
var Home = require('../Component/Home');
var Message = require('../Component/Message');
var Mine = require('../Component/Mine');
var Find = require('../Component/Find');
var Main = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'Home',
    }
  },
  render() {

    return (

      <View style={styles.container}>
        {/**
         * TabNavigator在github地址https://github.com/happypancake/react-native-tab-navigator
         */}
        <TabNavigator
          //导航条的背景颜色
          barTintColor='black'
        >
          <TabNavigator.Item
            //设置选中的位置
            selected={this.state.selectedTab === 'Home'}
            //标题
            title="首页"
            //标题样式
            titleStyle={styles.tabText}
            //选中时标题文字样式
            selectedTitleStyle={styles.selectedTabText}
            //图标
            renderIcon={() => <Image style={styles.icon} source={{ uri: 'tabbar_home' }} />}
            //选中时图标
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: 'red' }]} source={{ uri: 'tabbar_home_highlighted' }} />}
            //点击Event
            onPress={() => this.setState({ selectedTab: 'Home' })}
            badgeText="20"   >
            <Navigator
              style={{ flex: 1 }}
              initialRoute={{
                component: Home,
                title: 'Home',
                passProps: {},
                leftButtonIcon:{ uri: 'tabbar_home' },
                rightButtonIcon:{ uri: 'tabbar_home' }
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} show={true}/>
              }} />
           
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Find'}
            title="发现"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={{ uri: 'tabbar_discover' }} />}
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: 'red' }]} source={{ uri: 'tabbar_discover_highlighted' }} />}
            onPress={() => this.setState({ selectedTab: 'Find' })}>
            <Navigator
              style={{ flex: 1 }}
              initialRoute={{
                component: Find,
                title: 'Find',
                passProps: {},
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Message'}
            title="消息"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={{ uri: 'tabbar_message_center' }} />}
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: 'red' }]} source={{ uri: 'tabbar_message_center_highlighted' }} />}
            onPress={() => this.setState({ selectedTab: 'Message' })}>
            <Navigator
              style={{ flex: 1 }}
              initialRoute={{
                component: Message,
                title: 'Message',
                passProps: {},
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Mine'}
            title="我的"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={{ uri: 'tabbar_profile' }} />}
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: 'red' }]} source={{ uri: 'tabbar_profile_highlighted' }} />}
            onPress={() => this.setState({ selectedTab: 'Mine' })}>
            <Navigator
              style={{ flex: 1 }}
              initialRoute={{
                component: Mine,
                title: 'Mine',
                passProps: {},
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabText: {
    fontSize: 10,
    color: 'black'
  },
  selectedTabText: {
    fontSize: 10,
    color: 'red'
  },
  icon: {
    width: 26,
    height: 26,
  },
  page0: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  page1: {
    flex: 1,
    backgroundColor: 'blue'
  }
});

// AppRegistry.registerComponent('NewsDemo', () => NewsDemo);
module.exports = Main;

