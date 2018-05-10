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
    TouchableOpacity
} from 'react-native';

var Smzq = React.createClass({
    getInitialState(){
        return {title: '不透明触摸'}
    },
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=> this.activeEvent('点击')}
                    onPressIn={()=> this.activeEvent('按下')}
                    onPressOut={()=> this.activeEvent('抬起')}
                    onLongPress={()=> this.activeEvent('长按')}
                >
                    <View style={styles.container}>
                        <Text style={styles.welcome}>
                            {
                                //通过this.state来获取值
                                this.state.title
                            }
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    },
    activeEvent(event){
        //通过this.setState来修改state值
        // 注意：一旦调用了this.setState方法，组件一定会调用render方法，对组件进行再次的渲染，
        // 不过，如果React框架会自动根据DOM的状态来判断是否需要真正的渲染
        this.setState({
            title: event
        })
    },
})

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

module.exports = Smzq;