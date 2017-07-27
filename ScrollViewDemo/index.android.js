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
    ScrollView,
    Image
} from 'react-native';
//引入计时器
var TimerMixin = require('react-timer-mixin');
var imageData = require('./ImageData.json');
var windowWidth=require('Dimensions').get('window').width;
var ScrollViewDemo = React.createClass({
    //注册计时器
    mixins: [TimerMixin],
    getDefaultProps(){
        return {
            duration:1000,
        }
    },
    getInitialState(){
        return {
            currentPage:0,
        }
    },
    render() {
        return (
            // <ScrollView
            //     horizontal={true}
            // >
            //     {this.allChildView()}
            // </ScrollView>
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    //隐藏水平滚动条
                    // showsHorizontalScrollIndicator={true}
                    //当当一帧滚动完毕的时候调用，e.nativeEvent.contentOffset。
                    //OnMomentumScrollEnd  ={this.onAnimationEnd}  不带括号,会默认将ScrollView作为参数带进去
                    OnMomentumScrollEnd  ={(e)=>this.onAnimationEnd(e)}
                >
                    {this.renderAllImage()}
                </ScrollView>
                <View style={styles.bottomStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },
    renderAllImage(){
        var data = imageData.data;
        var imageArr = [];
        for (var i = 0; i < data.length; i++) {
            imageArr.push(
                <Image key={i} source={{uri:data[i].img}}
                    style={
                    {
                        width:windowWidth,
                        height:windowWidth*2/5
                    }
                    }
                ></Image>
            )
        }
        return imageArr;
    },
    renderIndicator(){
        var data = imageData.data;
        var textArr = [];

        for (var i = 0; i < data.length; i++) {
            var style=(i==this.state.currentPage)?{backgroundColor:'orange'}:{backgroundColor:'white'};
            textArr.push(
                <Text key={i}
                      //放了2个样式
                    style={
                        [
                            {
                            width:20,
                            height:20,
                            borderRadius:10,
                            marginLeft:10
                            },
                            style
                        ]
                    }
                ></Text>
            )
        }
        return textArr;
    },
    onAnimationEnd(e){
        //水平方向偏移量
        var offsetX=e.nativeEvent.contentOffset.x;
        //当前页数
        var currentPageTemp=Math.floor(offsetX/windowWidth);
        console.log(offsetX+"   "+currentPageTemp);
        //更新状态机,重新绘制UI
        this.setState({
            currentPage:currentPageTemp
        });
    },
    allChildView() {
        var color = ['red', 'yellow', 'purple', 'black', 'red', 'yellow', 'black', 'purple'];
        var childView = [];
        for (var i = 0; i < color.length; i++) {
            childView.push(
                <View key={i} style={{
                    backgroundColor:color[i]
                }}>
                    <Text style={{
                        height:150,
                        width:100
                    }
                    }>{i}</Text>
                </View>
            );
        }
        return childView;
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    bottomStyle: {
        width:windowWidth,
        backgroundColor: 'rgba(0,0,0,0.4)',
        height:50,
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignItems:'center'
    },
});

AppRegistry.registerComponent('ScrollViewDemo', () => ScrollViewDemo);
