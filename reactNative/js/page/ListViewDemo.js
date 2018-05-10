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
    TouchableOpacity,
    Alert
} from 'react-native';
var Wine = require('../../data/Wine.json');//数组
var ListViewDemo = React.createClass({
    //设置初始值
    getInitialState(){
        //1.设置数据源
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 != r2});
        //2.设置返回数据
        return {
            dataSource: ds.cloneWithRows(Wine)
        }
    },
    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}//数据源
                renderRow={this.renderRow}
            />
        )
    },
    //数据源中一条数据，分组的ID，行的ID，以及标记是否是高亮选中的状态信息。
    //设置好数据源后，数据源有多少item,此方法就会执行多少次,将每条数据(rowData)和行号(rowID)返回
    renderRow(rowData, sectionID, rowID, highlightRow){
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>Alert.alert('提示','点击了'+rowID+'行')}
            >
            <View style={styles.container}>
                <Image
                    source={{uri:rowData.image}}
                    style={{
                        width:100,
                        height:100,
                        margin:10
                    }}
                ></Image>
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <Text
                        style={{
                            fontSize:28,
                            color:'black'
                        }}
                    >{rowData.name}</Text>
                    <Text
                        style={{
                            fontSize:24,
                            color:'red'
                        }}
                    >${rowData.money}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        margin:5
    },
});
module.exports=ListViewDemo
