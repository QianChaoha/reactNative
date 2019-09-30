/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  View
} from 'react-native';

export default class Main extends Component {
  //初始化方法
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('Hello')}
          title="首页"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('BViewDemo')}
          title="flex布局"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('ImageDemo')}
          title="图片控件"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('TextInputDemo')}
          title="TextInput控件"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('Smzq')}
          title="Smzq"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('ScrollViewDemo')}
          title="ScrollViewDemo"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('ListViewDemo')}
          title="ListViewDemo"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('JggListView')}
          title="JggListView"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('CarListView')}
          title="CarListView"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('TabBarDemo')}
          title="TabBarDemo"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate('LifeCycleDemo')}
          title="LifeCycleDemo"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  buttonStyle: {
    padding: 10,
  },
});