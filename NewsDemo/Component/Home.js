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
  ListView,
  TouchableOpacity
} from 'react-native';

var Home = React.createClass({
  getDefaultProps() {
    return {
      url: 'http://www.weather.com.cn/data/sk/101010100.html'

    };
  },
  getInitialState() {
    return {
      headData: [],
      listSouce: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
    }
  },
  render() {
    return <View>
      <Text>首页</Text>
    </View>
  },
  componentWillMount() {
    console.log('url  ' + this.props.url);
    fetch(this.props.url)
      //将responseData转成json格式
      .then((responseData => responseData.json()))
      //处理返回的json格式数据
      .then(jsonData => {
        // console.log(jsonData);
        var requestData = require('../LocalData.json').list;
        // console.log('requestData '+requestData);
        var headArr = [], contentArr = [];
        for (var i = 0; i < requestData.length; i++) {
          var element = requestData[i];
          if (element.hasAD == 1) {
            headArr.push(element.ads);
          } else {
            contentArr.push(element);
          }
        }
        this.setState({
          headData: headArr,
          listSouce:this.state.listSouce.cloneWithRows(contentArr)
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('NewsDemo', () => NewsDemo);
module.exports = Home;

