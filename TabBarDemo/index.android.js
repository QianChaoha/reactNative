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
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

var TabBarDemo = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'Event',
    }
  },
  render() {
    return (
      <View style={styles.container}>
        {
        /**
         * TabNavigator在github地址https://github.com/happypancake/react-native-tab-navigator
         */
        }
        <TabNavigator 
         //导航条的背景颜色
          barTintColor='black'
          // style={{
          //   height:'80px'
          // }}
        >
          <TabNavigator.Item
            //设置选中的位置
            selected={this.state.selectedTab === 'Event'}
            //标题
            title="Event"
            //标题样式
            titleStyle={styles.tabText}
            //选中时标题文字样式
            selectedTitleStyle={styles.selectedTabText}
            //图标
            renderIcon={() => <Image style={styles.icon} source={{ uri: 'icon_tabbar_homepage' }} />}
            //选中时图标
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: 'red' }]} source={{ uri: 'icon_tabbar_homepage' }} />}
            //点击Event
            onPress={() => this.setState({ selectedTab: 'Event' })}
            badgeText="20"   >
            <View style={styles.page0}>
              <Text style={{ fontSize: 18, padding: 15, color: 'blue' }}>This is Event Page</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Log'}
            title="Log"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={{ uri: 'icon_tabbar_homepage' }} />}
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: 'red' }]} source={{ uri: 'icon_tabbar_homepage_selected' }} />}
            onPress={() => this.setState({ selectedTab: 'Log' })}>
            <View style={styles.page0}>
              <Text style={{ fontSize: 18, padding: 15, color: 'blue' }}>This is Log Page</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Device'}
            title="Device"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={{ uri: 'icon_tabbar_merchant_normal' }} />}
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: 'red' }]} source={{ uri: 'icon_tabbar_merchant_selected' }} />}
            onPress={() => this.setState({ selectedTab: 'Device' })}>
            <View style={styles.page1}>
              <Text style={{ fontSize: 18, padding: 15, color: '#fff' }}>This is Device Page</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'User'}
            title="User"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={{ uri: 'icon_tabbar_mine' }} />}
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: 'red' }]} source={{ uri: 'icon_tabbar_mine_selected' }} />}
            onPress={() => this.setState({ selectedTab: 'User' })}>
            <View style={styles.page1}>
              <Text style={{ fontSize: 18, padding: 15, color: '#fff' }}>This is User Page</Text>
            </View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabText: {
    fontSize: 16,
    color: 'black',
  },
  selectedTabText: {
    fontSize: 16,
    color: 'red'
  },
  icon: {
    width: 20,
    height: 20,
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

AppRegistry.registerComponent('TabBarDemo', () => TabBarDemo);
