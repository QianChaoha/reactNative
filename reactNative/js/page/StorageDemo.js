/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Button,
    Text,
    AsyncStorage
} from 'react-native';
let changeText;
const SAVE_KEY = 'save_key';
export default class PanResponderDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: ''
        };
    }
    //初始化方法
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={text => this.onChangeText(text)} />
                <View style={styles.btnContainerStyle}>
                    <View style={styles.btnWrapperStyle}>
                        <Button
                            style={styles.buttonStyle}
                            title='存储'
                            onPress={this.save.bind(this)}
                        ></Button></View>
                    <View style={styles.btnWrapperStyle}>
                        <Button
                            style={styles.buttonStyle}
                            title='删除'
                            onPress={this.delete.bind(this)}
                        ></Button></View>
                    <View style={styles.btnWrapperStyle}>
                        <Button
                            style={styles.buttonStyle}
                            title='获取'
                            onPress={this.getData.bind(this)}
                        ></Button></View>
                </View>
                <Text style={styles.textStyle}>{this.state.result}</Text>
            </View>
        );
    }
    save() {
        AsyncStorage.setItem(SAVE_KEY, changeText, (error, result) => {
            if (!error) {
                console.warn('存储成功')
            }
        });
    }
    delete() {
        AsyncStorage.removeItem(SAVE_KEY, (error, result) => {
            if (!error) {
                console.warn('删除成功')
            }
        });
    }
    getData() {
        AsyncStorage.getItem(SAVE_KEY, (error, result) => {
            if (!error) {
                this.setState({
                    result: result
                });
            }
        });
    }
    onChangeText(text) {
        changeText = text;
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    textInputStyle: {
        height: 50,
    },
    buttonStyle: {
        marginTop: 10,

    },
    textStyle: {
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1,
        height:50
    },
    btnContainerStyle: {
        flexDirection: 'row'
    },
    btnWrapperStyle: {
        flex: 1,
        margin: 5
    }
});

