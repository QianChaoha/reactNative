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
    TextInput
} from 'react-native';

export default class TextInputDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    // password={true}
                    placeholder={"占位文字"}
                    clearButtonMode={"always"}
                />

            </View>
        );
    }
}

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
    textInputStyle: {
        width: 200,
        height: 50
    }
});

AppRegistry.registerComponent('TextInputDemo', () => TextInputDemo);
