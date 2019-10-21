/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    PanResponder,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Header } from 'react-navigation';
const btnR = 50;

export default class PanResponderDemo extends Component {
    constructor(props) {
        super(props);
        this._previousLeft = Constant.width - btnR * 2; // 左边初始距离
        this._previousTop = 0; // 上边初始距离
        this._circleStyles = {
            style: {
                left: this._previousLeft,
                top: this._previousTop,
                backgroundColor: '#FFF',
            },
        };
    }
    //初始化方法
    render() {
        return (
            <View style={styles.container}>
                <Text
                    ref='circle'
                    style={styles.gesture}
                    {...this._panResponder.panHandlers}>
                    手势按钮
                </Text>
            </View>
        );
    }
    componentDidMount() {
        this._updateNativeStyles();
    }
    _panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (event, gestureState) => true,
        onMoveShouldSetPanResponder: (event, gestureState) => true,
        onPanResponderGrant: (event, gestureState) => {
            //开始手势操作
            this._highlight();
        },
        onPanResponderMove: (event, gestureState) => {
            //用户滑动手指时，调用该方法
            this._handlePanResponderMove(event, gestureState);
        },
        onPanResponderRelease: (event, gestureState) => {
            //一个手势操作已经成功完成
            this._unHighlight();
            this._handlePanResponderEnd(event, gestureState);
        },
        onPanResponderTerminate: (event, gestureState) => {
            // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            this._unHighlight();
            this._handlePanResponderEnd(event, gestureState);
        },
    });
    _highlight() {
        this._circleStyles.style.backgroundColor = '#eee';
        this._circleStyles.style.shadowOffset = { width: 0, height: 6 };
        this._updateNativeStyles();
    }

    _unHighlight() {
        this._circleStyles.style.backgroundColor = '#FFF';
        this._circleStyles.style.shadowOffset = { width: 0, height: 3 };
        this._updateNativeStyles();
    }
    _handlePanResponderMove = (event, gestureState) => {
        // 触摸移动中的回调函数，每秒一定帧数触发
        // 限制左右移动
        if (this._previousLeft + gestureState.dx < 0) {
            this._circleStyles.style.left = 0;
        } else if (this._previousLeft + gestureState.dx > Constant.width - btnR * 2) {
            this._circleStyles.style.left = Constant.width - btnR * 2;
        } else {
            this._circleStyles.style.left = this._previousLeft + gestureState.dx;
        }
        // 限制上下移动
        if (this._previousTop + gestureState.dy < 0) {
            this._circleStyles.style.top = 0;
        } else if (this._previousTop + gestureState.dy > Constant.height - btnR * 4 - Header.HEIGHT) {
            this._circleStyles.style.top = Constant.height - btnR * 4 -Header.HEIGHT;
        } else {
            this._circleStyles.style.top = this._previousTop + gestureState.dy;
        }
        this._updateNativeStyles();
    };
    _handlePanResponderEnd = (event, gestureState) => {
        // 结束触摸

        // 限制左右移动
        if (this._previousLeft + gestureState.dx < 0) {
            this._previousLeft = 0;
        } else if (this._previousLeft + gestureState.dx > Constant.width - btnR * 2) {
            this._previousLeft = Constant.width - btnR * 2;
        } else {
            this._previousLeft += gestureState.dx;
        }
        // 限制上下移动
        if (this._previousTop + gestureState.dy < 0) {
            this._previousTop = 0;
        } else if (this._previousTop + gestureState.dy > Constant.height - btnR * 4) {
            this._previousTop = Constant.height - btnR * 4;
        } else {
            this._previousTop += gestureState.dy;
        }
    };
    _updateNativeStyles() {
        // 用setNativeProps而不是保存在state里，就防止了动画频繁刷新渲染页面，提高了性能。所以动画最好直接操作dom。
        this.refs.circle && this.refs.circle.setNativeProps(this._circleStyles);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    gesture: {
        width: btnR * 2,
        height: btnR * 4,
        borderRadius: btnR,
        opacity: 0.8,
        zIndex: 9999,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'space-around',
        elevation: 10,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 3,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

