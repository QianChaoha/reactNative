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
    TextInput,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Alert,
} from 'react-native';
var Dimensions = require('Dimensions');
var windowWidth = Dimensions.get('window').width;
//export default 
class LoginView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../img/icon.png')}
                    style={{
                        width : 160,
                        height: 160,
                        borderColor: 'white',
                        borderRadius:80,
                        borderWidth:10,
                        marginTop:50,
                    }}
                />
                <TextInput placeholder='请输入用户名' style={styles.textInputUserNameStyle}></TextInput>
                <TextInput
                    placeholder='请输入密码'
                    password={true}
                    style={
                    styles.textInputPasswordStyle
                    }
                ></TextInput>
                <TouchableOpacity
                    //按下时透明度变化
                    activeOpacity={0.5}
                    // onPress={()=>this.activeEvent('点击')}
                    // onPressIn={()=>this.activeEvent('按下')}
                    // onPressIn={Alert.alert('按下')}
                    // onPressOut={Alert.alert('抬起')}
                    // onLongPress={AlertAlert.alert.alert('长按不放')}
                >
                    <View style={styles.loginStyle}>
                        <Text style={{
                         color:'white',
                         fontSize:20,
                        }}>登录</Text>
                    </View>
                </TouchableOpacity>
                <View style={{
                        flexDirection:'row',
                        marginTop:50,
                        alignItems:'center'
                        }}>
                    <Text style={{
                        color:'#63B7FF',
                        fontSize:20,
                        marginLeft:20,
                        }}>
                        无法登录
                    </Text>

                    <Text style={{
                        textAlign:'right',
                        flex:1,
                        marginRight:20,
                        color:'#63B7FF',
                        fontSize:20,
                    }}>新用户</Text>
                </View>
                <View style={{
                        flexDirection:'row',
                        marginLeft:20,
                        //绝对定位
                        position:'absolute',
                        bottom:20,
                        left: 20,
                        alignItems:'center'
                        }}>
                    <Text style={{
                        color:'black',
                        fontWeight:'bold',
                        fontSize:18,
                        }}>
                        其他登录方式
                    </Text>

                    <Image
                        style={styles.bottomImageStyle}
                        source={require('../../img/icon3.png')}
                    ></Image>
                    <Image
                        style={styles.bottomImageStyle}
                        source={require('../../img/icon7.png')}
                    ></Image>
                    <Image
                        style={styles.bottomImageStyle}
                        source={require('../../img/icon8.png')}
                    ></Image>
                </View>
            </View>
        );
    }

    activeEvent(event){
        Alert.alert(event)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center'
    },
    textInputUserNameStyle: {
        width: windowWidth-20,
        backgroundColor: 'white',
        textAlign: 'center',
        marginTop: 50,
    },
    textInputPasswordStyle: {
        width: windowWidth-20,
        backgroundColor: 'white',
        textAlign: 'center',
        marginTop: 2,
    },
    loginStyle: {
        width: windowWidth * 0.95,
        height: 60,
        backgroundColor: '#63B7FF',
        marginTop: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomImageStyle: {
        margin: 10,
        width:80,
        height:80,
        borderRadius:40,
    }
});
//输出类
module.exports = LoginView;
