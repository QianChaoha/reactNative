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
    Image
} from 'react-native';
var Dimensions = require('Dimensions')
export class BViewDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.innerView1}>
                    我是第一个文本
                </Text>
                <Text style={styles.innerView2}>
                    我是第二个文本
                </Text>
                <Text style={styles.innerView2}>
                    我是第三个文本
                </Text>
                <Text style={styles.innerView3}>
                    屏幕宽度为{Dimensions.get('window').width}
                    屏幕高度为{Dimensions.get('window').height}
                    屏幕分辨率为{Dimensions.get('window').scale}
                </Text>
                <Image
                    source={require('./img/1.png')}
                    style={{width:300,height:200}}
                ></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',//该属性决定主轴的方向，column竖直方向
        justifyContent: 'flex-end',// 定义了伸缩项目在主轴线的对齐方式
        marginTop: 20,
        alignItems: 'flex-end',//定义项目在交叉轴上如何对齐
    },
    innerView1: {
        width: 150,
        height: 50,
        backgroundColor: 'green',
        alignSelf: 'center',//允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性
    },
    innerView2: {
        height: 70,
        width: 100,
        backgroundColor: 'blue',

    },
    innerView3: {
        height: 70,
        width: 100,
        backgroundColor: 'white',
    }
});
//====================测试图片组件======================
export class BViewDemo1 extends Component {
    render() {
        return (
            <View style={{
                flex:1,
                flexDirection:'column',
            }}>
                <Text>从项目中加载</Text>

                <Image
                    source={require('./img/1.png')}
                    style={{width:300,height:200}}
                ></Image>

                <Text>从网络中加载</Text>
                <Image
                    source={{uri:'http://img.bimg.126.net/photo/ZWdvRTBDrymgJueo73kgpw==/449797012800471966.jpg'}}
                    style={{width:300,height:200}}
                ></Image>
                <Image
                    source={require('./img/1.png')}
                    style={{width:300,height:200}}
                >
                    <Text style={{alignSelf:'center',backgroundColor:'red'}}>
                        设置Image为此Text的背景图片
                    </Text>

                </Image>
            </View>
        );
    }
}
AppRegistry.registerComponent('BViewDemo', () => BViewDemo1);
