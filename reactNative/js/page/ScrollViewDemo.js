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
    ScrollView,
    Image,
    Alert
} from 'react-native';
//引入计时器
var TimerMixin = require('react-timer-mixin');
var imageData = require('../../data/ImageData.json');
var windowWidth = require('Dimensions').get('window').width;
var ScrollViewDemo = React.createClass({
    //注册计时器
    mixins: [TimerMixin],
    getDefaultProps(){
        return {
            duration: 3000,
        }
    },
    getInitialState(){
        return {
            currentPage: 0,
        }
    },
    // 组件加载成功并被成功渲染出来以后，所要执行的后续操作，一般会在这个函数中处理网络请求等加载数据的操作
    componentDidMount(){
        //开启计时器
        this.startTimer();
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
                    //当一帧滚动完毕的时候调用，e.nativeEvent.contentOffset。
                    //onMomentumScrollEnd  ={this.onAnimationEnd}  不带括号,会默认将ScrollView作为参数带进去
                    // onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                    ref='scrollView'
                    //开始拖拽,此时计时器停止
                    //简单点说，带括号的是函数调用，直接执行函数；不带括号的是绑定事件，事件触发再执行。
                    //复杂点说，带括号的是把返回值赋值给事件，不带括号的是把函数体所在地址位置赋值给事件。
                    onScrollBeginDrag={this.stopTimer}
                    //当结束手动拖拽的时候调用
                    onScrollEndDrag={(e)=>this.onAnimationEnd(e)}
                >
                    {this.renderAllImage()}
                </ScrollView>
                <View style={styles.bottomStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },
    stopTimer(){
        //停止计时器
        clearInterval(this.timer);
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
            var style = (i == this.state.currentPage) ? {backgroundColor: 'orange'} : {backgroundColor: 'white'};
            textArr.push(
                <Text key={i}
                    // 多种样式写法style={[   样式一,样式二,...       ]};
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
        var offsetX = e.nativeEvent.contentOffset.x;
        //当前页数
        var currentPageTemp = Math.floor(offsetX / windowWidth + 0.5);
        //更新状态机,重新绘制UI
        this.setState({
            currentPage: currentPageTemp
        }, function () {
            var scrollView = this.refs.scrollView;
            //让scrollview滚动起来
            var offsetX = this.state.currentPage * windowWidth;
            scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});
        });
        this.startTimer();
    },
    startTimer(){
        // this.scrollToCurrentPage();
        //添加计时器（1秒执行一次function方法）
        this.timer = this.setInterval(function () {
            var scrollView = this.refs.scrollView;
            var temp;
            if (this.state.currentPage < 4) {
                temp = this.state.currentPage + 1;

            } else {
                temp = 0;
            }
            //setState方法异步,设置成功后会回调后面的function方法
            this.setState({
                currentPage: temp
            }, function () {
                console.log("scrollTo  " + this.state.currentPage + "   temp " + temp);
                //让scrollview滚动起来
                var offsetX = this.state.currentPage * windowWidth;
                scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});
            });
        }, this.props.duration);
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
        width: windowWidth,
        backgroundColor: 'rgba(0,0,0,0.4)',
        height: 50,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
});

module.exports=ScrollViewDemo
