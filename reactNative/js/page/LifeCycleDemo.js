import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
export default class LifeCycleDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
    }
    timePlus() {
        let time = this.state.time;
        time = time + 1;
        this.setState({
            time: time
        });
    }
    render() {
        console.warn('render');
        return <View style={styles.contanier} >
            <Text onPress={this.timePlus.bind(this)}>点击 </Text>
            <Text>{this.state.time}</Text>

        </View>
    };
    //初始化时componentWillMount-->render-->componentDidMount
    componentWillMount(){
        console.warn('componentWillMount');
    }
    componentDidMount(){
        console.warn('componentDidMount');
    }
    //setState后,通过shouldComponentUpdate判断是否需要更新。需要的话componentWillUpdate-->render-->componentDidUpdate
    componentWillUpdate(){
        console.warn('componentWillUpdate');
    }
    componentDidUpdate(){
        console.warn('componentDidUpdate');
    }
}
const styles = StyleSheet.create({
    contanier: {
        flex: 1
    }
});