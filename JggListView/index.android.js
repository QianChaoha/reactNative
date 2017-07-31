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
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
var requestData = require('./shareData.json');
var windowWidth=require('Dimensions').get('window').width;
var column=3;
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
        return (
            <ListView
                dataSource={this.state.dataSource}//数据源
                renderRow={this.renderRow}
                contentContainerStyle={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                    alignItems:'flex-start',
                }}
            ></ListView>
        )
    },
    renderRow(rowData, sectionID, rowID, highlightRow){
        return (
            <TouchableOpacity
                activeOpacity={0.5}
            >
                <View style={styles.container}>
                    <Image
                        source={{uri:rowData.icon}}
                        style={{
                            width: windowWidth/column*0.6,
                            height:windowWidth/column*0.6,
                            marginTop:10
                        }}
                    ></Image>
                    <Text
                        style={{
                            fontSize:20,
                        }}
                    >{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

});

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        width:windowWidth/column,
        alignItems:'center'
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
