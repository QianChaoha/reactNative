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
    Text
} from 'react-native';
let changeText;
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
                <Button
                    style={styles.buttonStyle}
                    title='网络请求'
                    onPress={this.getData.bind(this)}
                ></Button>
                <Text style={styles.textStyle}>{this.state.result}</Text>
            </View>
        );
    }
    getData() {
        fetch(`https://api.github.com/search/repositories?q=${changeText}`)
            .then((response) =>{
                if(response.ok){
                    return response.text();
                }
                throw new Error('error: not ok')
            })
            .then((responseText) => {
                this.setState({
                    result: responseText
                });
            })
            .catch((error) => {
                console.error(error.toString());
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
        marginTop: 10
    },
    textStyle: {
        marginTop: 10,
        flex: 1
    }
});

