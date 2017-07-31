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
    ListView
} from 'react-native';
var requestData = require('./shareData.json');
var JggListView = React.createClass({
    getInitialState(){
        //1.设置数据源
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 != r2});
        //2.设置返回数据
        return {
            dataSource: ds.cloneWithRows(requestData.data)
        }
    },
    render(){
        return {
            <ListView
                dataSource={this.state.dataSource}//数据源
                renderRow={this.renderRow}
            ></ListView>
        }
    },
    renderRow(rowData, sectionID, rowID, highlightRow){
        return ()
    }

});

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

AppRegistry.registerComponent('JggListView', () => JggListView);
